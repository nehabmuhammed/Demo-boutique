import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-neutral-50 pt-32 pb-24 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold tracking-tight text-neutral-900 mb-6 font-semibold">Contact Us</h1>
        <p className="text-xl text-neutral-600 max-w-2xl mb-16">
          Whether you have a question about features, pricing, need a demo, or have a service request, our team is ready to answer all your questions.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-neutral-100">
            <h2 className="text-3xl font-bold mb-8">Send a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">First Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors" placeholder="john.doe@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Product Serial Number (Optional)</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors" placeholder="e.g. AH-123456789" />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Message</label>
                <textarea rows={5} className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors" placeholder="How can we help you?"></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-colors">
                Send Request
              </button>
            </form>
          </div>

          <div className="space-y-10">
            <div>
              <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-50 p-4 rounded-full mr-6 text-blue-600">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Call Us</h4>
                    <p className="text-neutral-500 mb-1">M-F from 8am to 6pm EST.</p>
                    <p className="text-lg font-medium text-neutral-900">1-800-123-4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-teal-50 p-4 rounded-full mr-6 text-teal-600">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Chat Support</h4>
                    <p className="text-neutral-500 mb-1">Our support team is here to help.</p>
                    <p className="text-lg font-medium text-neutral-900">support@aurahome.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-indigo-50 p-4 rounded-full mr-6 text-indigo-600">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Headquarters</h4>
                    <p className="text-neutral-500 mb-1">Visit our flagship showroom.</p>
                    <p className="text-lg font-medium text-neutral-900">123 Innovation Drive<br/>Tech City, NY 10001</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
