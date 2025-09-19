import React from 'react'

const ProjectCard = () => {
  const gallery = [
    "",
    "https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg",
    "https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg",
    "https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg",
    "https://k72.ca/uploads/caseStudies/Opto_Reseau_Brand/opto_thumbnail2-1280x960.jpg",
    "https://k72.ca/uploads/caseStudies/COUP_FUMANT/CF_thumbnail-1280x960.jpg",
    "https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg",
    "https://k72.ca/uploads/caseStudies/BEST/BEST_site_Thumbnail-1280x960.jpg",
    "https://k72.ca/uploads/caseStudies/A_table/thumbnailimage_atable2-1280x960.jpg",
    "https://k72.ca/uploads/caseStudies/SollioAg/thumbnailimage_SollioAg-1280x960.jpg",
    "https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg",
    "https://k72.ca/uploads/caseStudies/OSM/thumbnailimage_OSM-1280x960.jpg",
    "https://k72.ca/uploads/caseStudies/BAnQ_100TEMPS/100temps_Thumbnail-1280x960.jpg",
    "https://k72.ca/uploads/caseStudies/CRISIS24/crisis24_behance_1920X1200_cartes-1280x960.jpg",
    "https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg",
    "https://k72.ca/uploads/caseStudies/PME-MTL/PME-MTL_Thumbnail-1280x960.jpg",
    "https://k72.ca/uploads/caseStudies/FRUITE/Fruite_thumbnail_bbq-1280x960.jpg"
  ];

  return (
    <div>
      {gallery.map((x, idx, array) => {
        if (idx % 2 === 0) return null;

        return (
          <div key={`row-${idx}`} className='project-row flex flex-wrap gap-2 w-full min-h-[400px] mb-8'>
            {/* First image */}
            <div key={`img-${idx}`} className='project-img flex-1 relative overflow-hidden rounded-none hover:rounded-[50px]'>
              <div className='absolute inset-0 z-10 flex items-center justify-center bg-black/50 opacity-0 hover:opacity-100 transition-all'>
                <h2 className='text-white text-4xl p-2 border-2 rounded-4xl'>VIEW PROJECT</h2>
              </div>
              <img className='h-full w-full object-cover' src={array[idx]} alt="" />
            </div>

            {/* Second image */}
            {idx < array.length - 1 && (
              <div key={`img-${idx+1}`} className='project-img flex-1 relative overflow-hidden rounded-none hover:rounded-[50px]'>
                <div className='absolute inset-0 z-10 flex items-center justify-center bg-black/50 opacity-0 hover:opacity-100 transition-all'>
                  <h2 className='text-white text-4xl p-2 border-2 rounded-4xl'>VIEW PROJECT</h2>
                </div>
                <img className='h-full w-full object-cover' src={array[idx+1]} alt="" />
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default ProjectCard;
