import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { Info, X } from 'phosphor-react';
import { Patient } from '../../type/Patient';

interface ModalInfoPatientsProps {
  patient: Patient;
}

export const ModalInfoPatients = ({ patient }: ModalInfoPatientsProps) => {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="relative w-20 h-8 bg-sky-600 text-slate-100 rounded-md text-left px-3 hover:bg-sky-400 hover:text-slate-900 transition-colors"
      >
        <span>View</span>
        <Info size={20} weight="bold" className="absolute top-1 right-2" />
      </button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-2xl mt-8 flex flex-col items-center transform rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <img src={patient.picture.large} alt="" className="absolute rounded-full top-0 translate-y-[-50%] " />
                  <button onClick={closeModal} className="self-end">
                    <X weight="bold" size={24} />
                  </button>

                  <Dialog.Title as="h3" className="text-2xl font-bold leading-6 text-gray-900 mt-16">
                    {`${patient.name.title}. ${patient.name.first} ${patient.name.last}`}
                  </Dialog.Title>
                  <div className="mt-2 w-3/4 mb-5">
                    <ul>
                      <li>
                        <span>Nationality: {patient.nat.toLocaleUpperCase()}</span>
                      </li>
                      <li>
                        <span>Gender: {patient.gender}</span>
                      </li>
                      <li>
                        <span>Birthday: {patient.dob.date}</span>
                      </li>
                    </ul>
                    <div>
                      <h4 className="text-center text-xl font-bold ">Address</h4>
                      <ul>
                        <li>
                          <span>
                            Street: {patient.location.street.name} - {patient.location.street.number}
                          </span>
                        </li>
                        <li>
                          <span>City: {patient.location.city}</span>
                        </li>
                        <li>
                          <span>State: {patient.location.state}</span>
                        </li>
                        <li>
                          <span>Country: {patient.location.country}</span>
                        </li>
                        <li>
                          <span>Postcode: {patient.location.postcode}</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-center text-xl font-bold ">Contact</h4>
                      <ul>
                        <li>
                          <span>Phone: {patient.phone.replaceAll('-', '')}</span>
                        </li>
                        <li>
                          <span>Cell: {patient.cell.replaceAll('-', '')}</span>
                        </li>
                        <li>
                          <span>E-mail: {patient.email}</span>
                        </li>
                      </ul>
                    </div>
                    {/* id url */}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
