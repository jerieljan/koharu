'use client'

import { create } from 'zustand'
import type { OperationState } from '@/lib/operations'

type OperationStoreState = {
  operation?: OperationState
  startOperation: (operation: Omit<OperationState, 'cancelRequested'>) => void
  updateOperation: (operation: Partial<OperationState>) => void
  finishOperation: () => void
  cancelOperation: () => void
  isCancelled: () => boolean
  resetOperationState: () => void
}

export const useOperationStore = create<OperationStoreState>((set, get) => ({
  operation: undefined,
  startOperation: (operation) =>
    set({
      operation: {
        ...operation,
        cancelRequested: false,
      },
    }),
  updateOperation: (operation) =>
    set((state) =>
      state.operation
        ? {
            operation: {
              ...state.operation,
              ...operation,
            },
          }
        : { operation: undefined },
    ),
  finishOperation: () => set({ operation: undefined }),
  cancelOperation: () => {
    set((state) =>
      state.operation
        ? { operation: { ...state.operation, cancelRequested: true } }
        : { operation: undefined },
    )
  },
  isCancelled: () => {
    const state = get()
    return state.operation?.cancelRequested ?? false
  },
  resetOperationState: () => set({ operation: undefined }),
}))
