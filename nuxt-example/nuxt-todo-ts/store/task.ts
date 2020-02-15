import orderBy from 'lodash/orderBy'
import { firestoreAction } from 'vuexfire'
import firebase from '../plugins/firebase'

const db = firebase.firestore()
const taskRef = db.collection('task')

interface task {
  title: string,
  detail: string,
  date: string,
  status: boolean,
  id: string
}

interface State {
  tasks: task[]
}

export const state = () => ({
  tasks: []
})

export const actions = {
  init: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef('tasks', taskRef)
  }),
  add: firestoreAction((context, task: task) => {
    if (task.title.trim()) {
      taskRef.add(task)
    }
  }),
  remove: firestoreAction((context, id: string) => {
    taskRef.doc(id).delete()
  }),
  toggle: firestoreAction((context, task: task) => {
    taskRef.doc(task.id).update({
      status: !task.status
    })
  })
}

export const getters = {
  orderdTodos: (state: State) => {
    return orderBy(state.tasks, 'date', 'asc')
  }
}
