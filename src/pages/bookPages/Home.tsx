import React from 'react';
import Navbar from '../../components/globalComponents/Navbar';
import HeroImage from '../../components/globalComponents/HeroImage';
import Overlay from '../../components/globalComponents/Overlay';
import HeroContent from '../../components/globalComponents/HeroContent';
import SectionCarousel from '../../components/homePageComponents/SectionCarousel';
import HistoryImage from '../../assets/images/History.png'

const HomePage: React.FC = () => {
    const popularGenres = [
        { image: HistoryImage, bookName: 'Genre 1', genre: 'Fiction' },
        { image: HistoryImage, bookName: 'Genre 2', genre: 'Non-Fiction' },
        { image: HistoryImage, bookName: 'Genre 3', genre: 'Science Fiction' },
        { image: HistoryImage, bookName: 'Genre 4', genre: 'Fantasy' },
        { image: HistoryImage, bookName: 'Genre 5', genre: 'Mystery' },
        { image: HistoryImage, bookName: 'Genre 6', genre: 'Thriller' },
        { image: HistoryImage, bookName: 'Genre 7', genre: 'Romance' },
        { image: HistoryImage, bookName: 'Genre 8', genre: 'Historical' },
        { image: HistoryImage, bookName: 'Genre 9', genre: 'Horror' },
        { image: HistoryImage, bookName: 'Genre 10', genre: 'Biography' },
      ];
      
      const recommendations = [
        { image: HistoryImage, bookName: 'Book A', genre: 'Science Fiction' },
        { image: HistoryImage, bookName: 'Book B', genre: 'Fantasy' },
        { image: HistoryImage, bookName: 'Book C', genre: 'Mystery' },
        { image: HistoryImage, bookName: 'Book D', genre: 'Thriller' },
        { image: HistoryImage, bookName: 'Book E', genre: 'Romance' },
        { image: HistoryImage, bookName: 'Book F', genre: 'Historical' },
        { image: HistoryImage, bookName: 'Book G', genre: 'Horror' },
        { image: HistoryImage, bookName: 'Book H', genre: 'Biography' },
        { image: HistoryImage, bookName: 'Book I', genre: 'Adventure' },
        { image: HistoryImage, bookName: 'Book J', genre: 'Classic' },
      ];
      
  return (
    <>
      <Navbar />
      <div className="relative h-[400px] bg-white">
        <HeroImage />
        <Overlay />
        <HeroContent />
        <div className="w-full px-4 mt-6">
    <SectionCarousel title="Popular Genres" items={popularGenres} />
    <SectionCarousel title="Recommended For You" items={recommendations} />
  </div>
        
      </div>
    </>
  );
};

export default HomePage;
