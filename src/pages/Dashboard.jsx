export default function DashboardPage() {
  return (
    <div className="p-6 text-white bg-[#0a0b14] min-h-screen">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p className="mt-2">Welcome to your AgukenAI dashboard!</p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Call Statistics</h2>
          <p className="text-gray-300">No calls recorded yet.</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Settings</h2>
          <p className="text-gray-300">
            Configure your call handling preferences.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Documents</h2>
          <p className="text-gray-300">Manage your uploaded documents.</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Phone Numbers</h2>
          <p className="text-gray-300">Manage your forwarding phone numbers.</p>
        </div>
      </div>
    </div>
  );
}
