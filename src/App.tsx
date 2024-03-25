import { useState } from 'react'

interface Task {
  name: string
  done: boolean
}

function App() {
  const [newTask, setNewTask] = useState<string>('')
  const [task, setTask] = useState<Task[]>([])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault() //evita q se recargue la pagina
    addTask(newTask) //agrega la nueva tarea
    console.log(task)
    setNewTask('') //linpia avacio el input
  }

  const addTask = (name: string) => {
    const newTask: Task[] = [...task, { name, done: false }] // creo un nuevo objeto clonando el anterior y agregando los muevos
    setTask(newTask) //agrego a la tarea una nueva tarea
  }

  const toggleDoneTask = (i: number) => {
    const newTask: Task[] = [...task]
    newTask[i].done = !newTask[i].done
    setTask(newTask)
  }

  const removerTask = (i: number) => {
    const newTask: Task[] = [...task]
    newTask.splice(i, 1)
    setTask(newTask)
  }

  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  onChange={e => setNewTask(e.target.value)}
                  value={newTask}
                  className="form-control"
                />
                <button className="btn btn-success btn-block mt-2">save</button>
              </form>

              {task.map((t: Task, i: number) => {
                //recorro el arreglo
                return (
                  <div className="card card-body mt-2" key={i}>
                    <h1
                      style={{ textDecoration: t.done ? 'line-through' : '' }}
                    >
                      {t.name}
                    </h1>
                    <button
                      className="btn btn-secondary"
                      onClick={() => toggleDoneTask(i)}
                    >
                      {t.done ? '✓' : '✕'}
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => removerTask(i)}
                    >
                      🗑
                    </button>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
