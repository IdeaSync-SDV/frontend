const Stats = ({ todos }) => {
  if (!todos) {
    return null
  }

  const completedTodos = todos.filter((todo) => todo.isDone).length
  const uncompletedTodos = todos.filter((todo) => !todo.isDone).length

  return (
    <div className="flex items-center">
      <span className="text-red-500">{uncompletedTodos} à faire</span>
      <span className="px-2 text-gray-400">/</span>
      <span className="text-gray-900">{completedTodos} faits</span>
    </div>
  )
}

export default Stats
