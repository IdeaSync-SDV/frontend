import { Disclosure, Transition } from '@headlessui/react';
import { dateToRelative } from '@/utils/formatter';
import {
  ChevronRightIcon,
  ClockIcon,
  CheckIcon,
  XMarkIcon,
} from '@heroicons/react/20/solid';

const ToDoCard = ({ todo: { title, content, date, isDone }, index }) => (
  <div key={index} className="p-2 rounded">
    <Disclosure>
      <Disclosure.Button className="flex justify-between w-full bg-gradient-to-r from-sky-200 to-indigo-200 text-blue-900 text-left text-sm items-center py-2 px-4 rounded-lg font-medium">
        <span>{title}</span>
        <ChevronRightIcon className="ui-open:rotate-90 ui-open:transform w-5" />
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
          <div className="basis-2/3 pr-3 pl-1">
            <p className="break-all">{content}</p>
          </div>
          <div className="basis-1/3 pl-3">
            <div className="flex gap-x-2">
              <ClockIcon className="w-5" />
              <p className="text-gray-900">{dateToRelative(date)}</p>
            </div>
            <div className="flex gap-x-2">
              {isDone ? (
                <>
                  <CheckIcon className="w-5" />
                  <p className="text-gray-900">Fait.</p>
                </>
              ) : (
                <>
                  <XMarkIcon className="w-5" />
                  <p className="text-gray-900">Pas fait</p>
                </>
              )}
            </div>
          </div>
        </Disclosure.Panel>
      </Transition>
    </Disclosure>
  </div>
);

export default ToDoCard;
