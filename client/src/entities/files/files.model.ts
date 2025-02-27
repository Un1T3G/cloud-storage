import { create } from 'zustand'
import { FilesState } from './files.types'

export const useFilesStore = create<FilesState>((set) => ({
  files: [],
  addFile: (file) => set((state) => ({ files: [...state.files, file] })),
  setFiles: (files) => set({ files }, false),
  deleteFiles: (ids) =>
    set((state) => ({
      files: state.files.filter((file) => !ids.includes(file.id)),
    })),
}))
