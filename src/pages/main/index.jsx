import React, { useState } from 'react';
import Card from '../../components/Card';
import Pagination from '../../components/Pagination';

const Main = () => {
  const photos = [ 
    {
      title: 'Saga vinlande',
      imageUrl: 'https://www.hindustantimes.com/ht-img/img/2023/05/21/1600x900/vinland-saga-s2-ep-2-1_1680609772622_1684708641702.webp',
    },
    {
      title: 'Saga vinlande',
      imageUrl: 'https://www.hindustantimes.com/ht-img/img/2023/05/21/1600x900/vinland-saga-s2-ep-2-1_1680609772622_1684708641702.webp',
    },
    {
      title: 'Saga vinlande',
      imageUrl: 'https://www.hindustantimes.com/ht-img/img/2023/05/21/1600x900/vinland-saga-s2-ep-2-1_1680609772622_1684708641702.webp',
    },
    {
      title: 'Saga vinlande',
      imageUrl: 'https://www.hindustantimes.com/ht-img/img/2023/05/21/1600x900/vinland-saga-s2-ep-2-1_1680609772622_1684708641702.webp',
    },
    {
      title: 'Saga vinlande',
      imageUrl: 'https://www.hindustantimes.com/ht-img/img/2023/05/21/1600x900/vinland-saga-s2-ep-2-1_1680609772622_1684708641702.webp',
    },
    {
      title: 'Saga vinlande',
      imageUrl: 'https://www.hindustantimes.com/ht-img/img/2023/05/21/1600x900/vinland-saga-s2-ep-2-1_1680609772622_1684708641702.webp',
    },
    {
      title: 'Saga vinlande',
      imageUrl: 'https://www.hindustantimes.com/ht-img/img/2023/05/21/1600x900/vinland-saga-s2-ep-2-1_1680609772622_1684708641702.webp',
    },
    {
      title: 'Saga vinlande',
      imageUrl: 'https://www.hindustantimes.com/ht-img/img/2023/05/21/1600x900/vinland-saga-s2-ep-2-1_1680609772622_1684708641702.webp',
    },
    {
      title: 'Saga vinlande',
      imageUrl: 'https://www.hindustantimes.com/ht-img/img/2023/05/21/1600x900/vinland-saga-s2-ep-2-1_1680609772622_1684708641702.webp',
    },
    {
      title: 'Saga vinlande',
      imageUrl: 'https://www.hindustantimes.com/ht-img/img/2023/05/21/1600x900/vinland-saga-s2-ep-2-1_1680609772622_1684708641702.webp',
    },
    {
      title: 'Saga vinlande',
      imageUrl: 'https://www.hindustantimes.com/ht-img/img/2023/05/21/1600x900/vinland-saga-s2-ep-2-1_1680609772622_1684708641702.webp',
    },
    {
      title: 'Saga vinlande',
      imageUrl: 'https://www.hindustantimes.com/ht-img/img/2023/05/21/1600x900/vinland-saga-s2-ep-2-1_1680609772622_1684708641702.webp',
    },
    {
      title: 'Saga vinlande',
      imageUrl: 'https://www.hindustantimes.com/ht-img/img/2023/05/21/1600x900/vinland-saga-s2-ep-2-1_1680609772622_1684708641702.webp',
    },
    {
      title: 'Saga vinlande',
      imageUrl: 'https://www.hindustantimes.com/ht-img/img/2023/05/21/1600x900/vinland-saga-s2-ep-2-1_1680609772622_1684708641702.webp',
    },
    {
      title: 'Saga vinlande',
      imageUrl: 'https://www.hindustantimes.com/ht-img/img/2023/05/21/1600x900/vinland-saga-s2-ep-2-1_1680609772622_1684708641702.webp',
    },
    {
      title: 'Saga vinlande',
      imageUrl: 'https://www.hindustantimes.com/ht-img/img/2023/05/21/1600x900/vinland-saga-s2-ep-2-1_1680609772622_1684708641702.webp',
    },
    {
      title: 'Saga vinlande',
      imageUrl: 'https://www.hindustantimes.com/ht-img/img/2023/05/21/1600x900/vinland-saga-s2-ep-2-1_1680609772622_1684708641702.webp',
    },
    {
      title: 'Saga vinlande',
      imageUrl: 'https://www.hindustantimes.com/ht-img/img/2023/05/21/1600x900/vinland-saga-s2-ep-2-1_1680609772622_1684708641702.webp',
    },
  ];

  const perPage = 8; // Количество фотографий на странице
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * perPage;
  const endIndex = currentPage * perPage;
  const currentPhotos = photos.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="main">
      <div className="photo-list">
        {currentPhotos.map((photo, index) => (
          <Card
            key={index}
            title={photo.title}
            imageUrl={photo.imageUrl}
          />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(photos.length / perPage)}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Main;
