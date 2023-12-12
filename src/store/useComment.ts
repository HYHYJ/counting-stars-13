import { create } from 'zustand';

interface useComment {
  comment: Replies[];
  setComment: (comment: Replies) => void;
  setDeleteComment: (qna: Replies[]) => void;
  qnaComment: Replies[];
  setQnaComment: (qnaComment: Replies) => void;
  setDeleteQnaComment: (qna: Replies[]) => void;
}

export const useComment = create<useComment>((set) => ({
  comment: [],
  setComment: (comment) => set((state) => ({ comment: [...state.comment, comment] })),
  setDeleteComment: (comment) => set({ comment }),
  qnaComment: [],
  setQnaComment: (qnaComment) => set((state) => ({ qnaComment: [...state.qnaComment, qnaComment] })),
  setDeleteQnaComment: (qnaComment) => set({ qnaComment }),
}));