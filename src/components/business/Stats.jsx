import Text from "@/components/generic/Text"

const Stats = ({ todos }) => {
  if (!todos) {
    return null
  }

  const completedTodos = todos.filter((todo) => todo.isDone).length
  const uncompletedTodos = todos.filter((todo) => !todo.isDone).length

  return (
    <div className="flex items-center">
      <Text className="font-medium" color="error">
        {uncompletedTodos} à faire
      </Text>
      <span className="px-2 text-gray-400">/</span>
      <Text>{completedTodos} faits</Text>
    </div>
  )
}

export default Stats
