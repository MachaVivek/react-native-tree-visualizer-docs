
const DeveloperPage = () => {
  return (
    <div className="min-h-screen bg-black text-gray-200 font-sans">
      <header className="flex items-center justify-between px-8 py-5 bg-neutral-950 border-b border-gray-800">
        <h1 className="text-2xl font-bold text-gray-100 tracking-tight">
          react-native-tree-visualizer
        </h1>
      </header>

      <main className="p-8 max-w-4xl mx-auto">
        <h2 className="text-xl font-semibold mb-6 text-gray-100">
          Documentation
        </h2>

        <p className="mb-6 text-gray-400 leading-relaxed">
          Welcome to the <strong className="text-gray-200">react-native-tree-visualizer</strong> documentation.
          This package helps you visualize and manipulate tree structures in React Native.
        </p>


      </main>

      {/* Footer */}
      <footer className="mt-16 py-6 text-center text-sm text-white-600 border-t border-gray-800">
        © {new Date().getFullYear()} react-native-tree-visualizer — Built with ❤️ for developers
      </footer>
    </div>
  );
};

export default DeveloperPage;
