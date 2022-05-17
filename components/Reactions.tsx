const Reactions = ({ slug }) => {

  return (
    <div className="grid items-center justify-between grid-cols-4 gap-6 md:grid-cols-2">
      <p>Rinkeby</p>
    </div>
  );
};

export default Reactions;

function ReactionCard({ isActive, incrementCB, decrementCB, children }) {
  return (
    <div
      role="button"
      onClick={isActive ? () => decrementCB() : () => incrementCB()}
      className={`${
        isActive
          ? 'bg-gray-300 dark:bg-darker'
          : 'bg-blueGray-100 dark:bg-midnight'
      } flex-1 py-4 rounded-lg flex flex-col items-center general-ring-state`}
    >
      {children}
    </div>
  );
}
