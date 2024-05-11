import { useSelector } from 'react-redux';

function Username() {
  const store = useSelector((store) => store.user);
  if (!store.username) return null;
  return (
    <div className=" hidden text-sm font-semibold md:block">
      {store.username}
    </div>
  );
}

export default Username;
