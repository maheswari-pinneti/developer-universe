import { create } from 'zustand';

interface AppState {
  // Navigation & View
  activeSection: string;
  setActiveSection: (section: string) => void;
  
  // Theme & Preferences
  soundEnabled: boolean;
  toggleSound: () => void;
  reducedMotion: boolean;
  toggleReducedMotion: () => void;
  webglSupported: boolean;
  setWebglSupported: (supported: boolean) => void;
  lowSpecMode: boolean;
  setLowSpecMode: (lowSpec: boolean) => void;

  // Selected Items / Modals
  selectedNodeId: string | null;
  setSelectedNodeId: (id: string | null) => void;
  selectedProjectId: string | null;
  setSelectedProjectId: (id: string | null) => void;
  resumeModalOpen: boolean;
  setResumeModalOpen: (open: boolean) => void;
  commandCenterOpen: boolean;
  setCommandCenterOpen: (open: boolean) => void;

  // Boot & Initialization
  initialized: boolean;
  setInitialized: (init: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
  activeSection: 'hero',
  setActiveSection: (section) => set({ activeSection: section }),

  soundEnabled: true,
  toggleSound: () => set((state) => ({ soundEnabled: !state.soundEnabled })),

  reducedMotion: typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false,
  toggleReducedMotion: () => set((state) => ({ reducedMotion: !state.reducedMotion })),

  webglSupported: true,
  setWebglSupported: (supported) => set({ webglSupported: supported }),

  lowSpecMode: false,
  setLowSpecMode: (lowSpec) => set({ lowSpecMode: lowSpec }),

  selectedNodeId: null,
  setSelectedNodeId: (id) => set({ selectedNodeId: id }),

  selectedProjectId: null,
  setSelectedProjectId: (id) => set({ selectedProjectId: id }),

  resumeModalOpen: false,
  setResumeModalOpen: (open) => set({ resumeModalOpen: open }),

  commandCenterOpen: false,
  setCommandCenterOpen: (open) => set({ commandCenterOpen: open }),

  initialized: false,
  setInitialized: (init) => set({ initialized: init }),
}));
