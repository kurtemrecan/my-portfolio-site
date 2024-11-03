import React from 'react';
import profileData from '../data/profileData';

export default function Profile() {
  return (
    <section className="container p-4">
      <hr className="border-t border-custom-purple mt-4" />

      <h2 className="text-6xl font-semibold mb-8 mt-8">Profile</h2>

      <div className="flex justify-between border-gray-300 pb-4 mb-4">
        {/* Profil Bilgileri */}
        <div className="flex flex-col w-1/2 pr-4">
          <h3 className="text-4xl font-regular text-indigo-700 mb-4">
            Profile
          </h3>
          <div className="flex mb-2">
            <strong className="w-48">Doğum Tarihi </strong>
            <span className="ml-4">{profileData.dogumGunu}</span>
          </div>
          <div className="flex mb-2">
            <strong className="w-48">İkamet Şehri </strong>
            <span className="ml-4">{profileData.ikametSehri}</span>
          </div>
          <div className="flex mb-2">
            <strong className="w-48">Eğitim Durumu </strong>
            <span className="flex ml-4 flex-grow">
              {profileData.egitimDurumu}
            </span>
          </div>
          <div className="flex mb-2">
            <strong className="w-48">Tercih Ettiği Rol </strong>
            <span className="ml-4">{profileData.rol}</span>
          </div>
        </div>

        {/* About Me Bölümü */}
        <div className="flex flex-col w-1/2 pl-4 ">
          <h3 className="text-4xl font-regular text-indigo-700 mb-4">
            About Me
          </h3>
          <p className="text-gray-400">{profileData.aboutMe}</p>
        </div>
      </div>
    </section>
  );
}
