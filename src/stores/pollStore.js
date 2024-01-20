import { defineStore } from 'pinia';
import fireapp from '@/lib/fireapp';
import { arrayUnion, collection, doc, getDocs, updateDoc } from 'firebase/firestore';

export const usePollStore = defineStore('poll', {
    state: () => ({
        _polls: [],
    }),
    getters: {
        getPolls: (state) => state._polls,
        getPoll: (state) => (id) => state._polls.find(poll => poll.id === id),
    },
    actions: {
        async fetchPolls() {
            try {
                const res = await getDocs(collection(fireapp.firestore, 'polls'));
                if (!res.empty) {
                    this._polls = res.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                }
            } catch (err) {
                console.error(err);
            }
        },
        async refreshPolls() {
            await this.fetchPolls();
        },
        async pollVote(id, vote) {
            try {
                const docRef = doc(fireapp.firestore, 'polls', id);
                await updateDoc(docRef, {
                    votes: arrayUnion(vote)
                });
                console.log("Voted");
            } catch(err) {
                console.error(err);
            }
        }
    }
});