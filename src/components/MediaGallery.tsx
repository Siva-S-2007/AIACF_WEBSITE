import React, { useState } from 'react';
import { Play, X, ChevronLeft, ChevronRight, Image as ImageIcon, Video } from 'lucide-react';

const MediaGallery = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const mediaItems = [
    {
      type: 'image',
      src: './src/9.jpg',
      thumbnail: '/src/9.jpg',
      title: 'Speech Delivery',
      description: 'AIACF Annual Conference bringing together industry leaders and stakeholders.'
    },
    {
      type: 'image',
      src: './src/2.jpg',
      thumbnail: './src/2.jpg',
      title: 'General Meeting',
      description: 'AIACF Annual general meeting.'
    },
    {
      type: 'video',
      src: 'https://youtube.com/watch?v=TRwJ6r8GqPc',
      thumbnail: './src/thumb2.jpg',
      title: 'GST & CHIT FUNDS',
      description: 'Overview on gst and chit funds explained by general secretary of AIACF'
    },
    {
      type: 'image',
      src: './src/4.jpg',
      thumbnail: './src/4.jpg',
      title: 'Member Meeting',
      description: 'Quarterly member meeting discussing industry developments.'
    },
    {
      type: 'image',
      src: './src/5.jpg',
      thumbnail: './src/5.jpg',
      title: 'Award Ceremony',
      description: 'Recognition ceremony for outstanding contributions to the industry.'
    },
    {
      type: 'video',  
      src: 'https://www.youtube.com/watch?v=svmyvads8pY',
      thumbnail: './src/thumb1.jpg',
      title: 'Chit Fund Roars Back',
      description: 'Chit fund association organize a press conference in new delhi to clear about the Sharda Scam.... Association member TS Shiv rama krishna and kamal bhambani talking to media...'
    }
  ];

  const openLightbox = (media, index) => {
    setSelectedMedia(media);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedMedia(null);
  };

  const navigateMedia = (direction) => {
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % mediaItems.length
      : (currentIndex - 1 + mediaItems.length) % mediaItems.length;
    
    setCurrentIndex(newIndex);
    setSelectedMedia(mediaItems[newIndex]);
  };

  return (
    <section id="media" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Media Gallery
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Explore our collection of images and videos showcasing AIACF events, conferences, and industry milestones.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mediaItems.map((item, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              onClick={() => openLightbox(item, index)}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  {item.type === 'video' ? (
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                      <Play className="w-8 h-8 text-white" />
                    </div>
                  ) : (
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                      <ImageIcon className="w-8 h-8 text-white" />
                    </div>
                  )}
                </div>

                {/* Media Type Badge */}
                <div className="absolute top-4 right-4">
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                    item.type === 'video' 
                      ? 'bg-red-500 text-white' 
                      : 'bg-blue-500 text-white'
                  }`}>
                    {item.type === 'video' ? (
                      <div className="flex items-center space-x-1">
                        <Video className="w-3 h-3" />
                        <span>Video</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-1">
                        <ImageIcon className="w-3 h-3" />
                        <span>Image</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedMedia && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={() => navigateMedia('prev')}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-200 bg-black/50 rounded-full p-2"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={() => navigateMedia('next')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-200 bg-black/50 rounded-full p-2"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Media Content */}
              <div className="bg-white rounded-2xl overflow-hidden">
                {selectedMedia.type === 'video' ? (
                  <div className="aspect-video">
                    <iframe
                      src={selectedMedia.src}
                      className="w-full h-full"
                      frameBorder="0"
                      allowFullScreen
                      title={selectedMedia.title}
                    ></iframe>
                  </div>
                ) : (
                  <img
                    src={selectedMedia.src}
                    alt={selectedMedia.title}
                    className="w-full h-auto max-h-[70vh] object-contain"
                  />
                )}
                
                {/* Media Info */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">{selectedMedia.title}</h3>
                  <p className="text-slate-600">{selectedMedia.description}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MediaGallery;