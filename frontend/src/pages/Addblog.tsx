import { Bell, EllipsisVertical } from "lucide-react";

const Addblog = () => {
    return (
        <div>
            <nav className="p-2">
                <div className=" text-black flex justify-between shadow-xl shadow-blue-100 items-center">
                    <div className="flex justify-between gap-4 p-4">
                        <p className="font-bold">
                            Logo
                        </p>
                        <p>
                            Drafts in Harsh's
                        </p>
                        <p>
                            Saved
                        </p>
                    </div>
                    <div className="flex justify-between gap-4 p-2 items-center">
                        <button className="bg-orange-500 rounded-2xl w-25 p-2 shadow-xl shadow-blue-200 font-bold text-white focus:bg-blue-600">Publish</button>
                        <EllipsisVertical />
                        <Bell />
                        <p>User img</p>
                    </div>
                </div>
            </nav>
            <div className="max-w-4xl mx-auto px-4 py-8">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                    <div className="p-8">
                        <h1 className="text-2xl font-bold text-gray-900 mb-8">
                            Create New Blog Post
                        </h1>

                        <div className="space-y-6">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Enter your title here..."
                                    className="w-full text-3xl font-bold text-gray-900 placeholder-gray-400 border-none outline-none bg-transparent resize-none"
                                    style={{ fontFamily: 'Georgia, serif' }}
                                />
                            </div>

                            <div className="h-px bg-gray-200"></div>

                            <div>
                                <textarea
                                    placeholder="Tell your story..."
                                    className="w-full h-96 text-xl text-gray-700 placeholder-gray-400 border-none outline-none bg-transparent resize-none leading-relaxed"
                                    style={{ fontFamily: 'Georgia, serif' }}
                                ></textarea>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Addblog;