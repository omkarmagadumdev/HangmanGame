import {create } from 'zustand';

export const useWordStore = create((set)=>({
        wordList:[],
        word:'',
        setWordList:(list)=>
        set((state)=>{
          
            return{
                ...state,
                wordList:list,
                
            }

        }),
        setWord:(newWord)=>
            set((state)=>{
                return{
                    ...state,
                    word:newWord
                }
        })

}))




