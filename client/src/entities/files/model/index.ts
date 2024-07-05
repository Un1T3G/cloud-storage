import { StateCreator, createStore } from 'zustand'
import { FilesState } from '../types'

const createFilesSlice: StateCreator<FilesState> = (set) => ({
  files: [],
  addFile: (file) => set((state) => ({ files: [...state.files, file] })),
  setFiles: (files) => set({ files }, false),
  deleteFiles: (ids) =>
    set((state) => ({
      files: state.files.filter((file) => !ids.includes(file.id)),
    })),
})

export const filesStore = createStore<FilesState>()(createFilesSlice)
