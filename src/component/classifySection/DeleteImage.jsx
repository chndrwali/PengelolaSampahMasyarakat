import React, { useContext } from 'react'; // Import React jika belum diimpor
import { FaTimes } from 'react-icons/fa';
import { AppContext } from '../../context/app-context';

function DeleteImage() {
  const context = useContext(AppContext);

  return (
    <FaTimes
      className="absolute min-h-[44px] min-w-[44px] z-10 top-2 right-2 text-white text-3xl p-1 rounded bg-red-500/90 shadow cursor-pointer hover:bg-red-500 hover:shadow-lg transition-all duration-200 ease-out"
      title="Tombol hapus gambar"
      aria-label="Tombol hapus gambar"
      onClick={context.deleteImageHandler}
    />
  );
}

export default DeleteImage;
