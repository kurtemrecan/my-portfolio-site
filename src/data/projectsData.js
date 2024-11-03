import project1 from '../assets/manifest-portfolio.png';
import project2 from '../assets/bol-malzemos.png';

const projectsData = [
  {
    id: 1,
    title: 'Manifest',
    description:
      '"Bu site, geleneksel Türk rakı-balık kültürünü modern bir dijital deneyimle buluşturmak için tasarlandı. React, HTML, CSS ve JavaScript kullanılarak geliştirilmiş olan site, kullanıcı dostu arayüzüyle lezzetli menülerimizi keşfetmenize, rezervasyon yapmanıza ve restoranımız hakkında bilgi edinmenize olanak tanır. Misafirlerimize denizden sofraya taze ve unutulmaz bir deneyim sunmayı hedefliyoruz."',
    image: project1,
    gihubLink: 'https://github.com/kurtemrecan/manifest.git',
    siteLink: 'https://manifest-fawn.vercel.app',
    technologies: ['React', 'JavaScript', 'TailwindCss'],
  },
  {
    id: 2,
    title: 'Pizza',
    description:
      '"Bu site, lezzetli pizzalarımızı kolayca keşfetmeniz ve sipariş vermeniz için React ve Tailwind CSS kullanılarak modern bir tasarımla hazırlandı. Kullanıcı dostu arayüzü sayesinde pizza çeşitlerimizi inceleyebilir, istediğiniz lezzeti hızla sipariş edebilir ve size en yakın şubemizi bulabilirsiniz. Kaliteli malzemeler ve taze lezzetler ile hazırlanmış pizzalarımızı denemeniz için sabırsızlanıyoruz!"',
    image: project2,
    gihubLink: 'https://github.com/kurtemrecan/bol-malzemos.git',
    siteLink: 'https://bol-malzemos.vercel.app/',
    technologies: ['React', 'JavaScript', 'TailwindCss'],
  },
];

export default projectsData;
