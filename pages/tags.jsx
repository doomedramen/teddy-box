import { PlusIcon } from '@heroicons/react/solid'
import { useState } from 'react'

import Modal from '../components/Modal';
import TagCard from '../components/TagCard'

export default function Home() {
    const [open, setOpen] = useState(false)

    return (
        <>

            <Modal open={open} setOpen={setOpen}></Modal>
            <div className="h-full min-h-screen p-2">

                <main>
                    <div className="flex justify-end space-x-2">
                        <label htmlFor="my-modal" className="btn modal-button">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                            <div className="ml-2">
                                <div>
                                    <PlusIcon/>
                                </div>
                                <div>
                                New Tag
                                </div>
                            </div>
                        </label>

                        <input type="checkbox" id="my-modal" className="modal-toggle" />
                        <div className="modal">
                            <div className="modal-box">
                                <h3 className="text-lg font-bold">Congratulations random Interner user!</h3>
                                <p className="py-4">You&apos;ve been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                                <div className="modal-action">
                                    <label htmlFor="my-modal" className="btn">Yay!</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
                        {/* <TagCard>01</TagCard>
                        <TagCard>01</TagCard>
                        <TagCard>01</TagCard>
                        <TagCard>01</TagCard>
                        <TagCard>01</TagCard>
                        <TagCard>01</TagCard>
                        <TagCard>01</TagCard>
                        <TagCard>01</TagCard> */}
                    </div>

                </main>


            </div>
        </>
    )
}