import { Disclosure, Transition } from "@headlessui/react"
import { dateToRelative } from "@/utils/formatter"
import Text from "@/components/generic/Text"
import {
  ChevronRightIcon,
  ClockIcon,
  CheckIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid"

const ToDoCard = ({ todo: { title, content, date, isDone } }) => (
  <div className="rounded">
    <Disclosure>
      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg bg-gradient-to-r from-sky-200 to-indigo-200 px-4 py-2 text-blue-900">
        <Text color="blue">{title}</Text>
        <ChevronRightIcon
          color={isDone ? "mediumseagreen" : "red"}
          className={"w-5 ui-open:rotate-90 ui-open:transform"}
        />
      </Disclosure.Button>
      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Disclosure.Panel className="flex justify-between divide-x py-2">
          <div className="basis-2/3 pl-1 pr-3">
            <Text className="break-words">{content}</Text>
          </div>
          <div className="basis-1/3 pl-3">
            <div className="flex gap-x-2">
              <ClockIcon className="w-5" />
              <Text>{dateToRelative(date)}</Text>
            </div>
            <div className="flex gap-x-2">
              {isDone ? (
                <>
                  <CheckIcon className="w-5" />
                  <Text>Fait</Text>
                </>
              ) : (
                <>
                  <XMarkIcon className="w-5" />
                  <Text>Pas fait</Text>
                </>
              )}
            </div>
          </div>
        </Disclosure.Panel>
      </Transition>
    </Disclosure>
  </div>
)

export default ToDoCard
