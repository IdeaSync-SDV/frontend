import { useAppContext } from '@/components/business/AppContext';
import { Disclosure, Transition } from '@headlessui/react';
import { dateToRelative } from '@/utils/formatter';
import {
  ChevronRightIcon,
  ClockIcon,
  CheckIcon,
  XMarkIcon,
} from '@heroicons/react/20/solid';

const ListToDos = () => {
  const {
    state: { todos },
  } = useAppContext();

  return (
    <div className="bg-white rounded-lg flex flex-col p-6 shadow-md basis-1/3 h-[36rem] overflow-auto">
      {todos?.length === 0 && (
        <p className="flex h-full justify-center items-center font-medium">
          Pas de to-dos pour le moment.
        </p>
      )}
      {todos?.length
        ? todos?.map((todo, i) => {
            return (
              <div key={i} className="p-2 rounded">
                <Disclosure>
                  <Disclosure.Button className="flex justify-between w-full bg-gradient-to-r from-sky-200 to-indigo-200 text-blue-900 text-left text-sm items-center py-2 px-4 rounded-lg font-medium">
                    <span>{todo.title}</span>
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
                        <p className="break-all">{todo.content}</p>
                      </div>
                      <div className="basis-1/3 pl-3">
                        <div className="flex gap-x-2">
                          <ClockIcon className="w-5" />
                          <p className="text-gray-900">
                            {dateToRelative(todo.date)}
                          </p>
                        </div>
                        <div className="flex gap-x-2">
                          {todo.isDone ? (
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
          })
        : null}
    </div>
  );
};

export default ListToDos;
