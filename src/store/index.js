import Vue from 'vue'
import Vuex from 'vuex'
import { vuexfireMutations, firestoreAction } from 'vuexfire'
import { db } from '@/db'

export default new Vuex.Store({
  state: {
    todos: []
  },
  mutations: {
    ...vuexfireMutations
  },
  actions: {
    bindTodosRef: firestoreAction(context => {
      return context.bindFirestoreRef('todos', db.collection('todos'))
    }),
    addTodo: firestoreAction((context, payload) => {
      return db.collection('todos').add(payload)
    }),
    removeTodo: firestoreAction((context, payload) => {
      return db.collection('todos')
        .doc(payload)
        .delete()
    }),
    updateTodo: firestoreAction((context, payload) => {
      return db.collection('todos')
        .doc(payload.id)
        .set(payload)
    }),
  },
  modules: {
  }
})
