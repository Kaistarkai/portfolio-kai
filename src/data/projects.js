// import iamges
import stemForOthersImg from '../assets/images/projects/stem.PNG';
import neuTalk from '../assets/images/projects/neuTalk.PNG';
import ShuOj from '../assets/images/projects/SHUOJ.PNG';

const projectList = [
    {
        id: 1,
        name: 'STEM For Others',
        description: 'This is a project description',
        githubLink: 'https://github.com/xiangxichen26/stemforothers',
        image: stemForOthersImg,
        techStack: ['TypeScript', 'React', 'Tailwind CSS'],
    },
    {
        id: 3,
        name: 'SHUOJ',
        description: 'This is a project description',
        githubLink: 'https://github.com/xiangxichen26/SHUOJ',
        image: ShuOj,
        techStack: ['Rust', 'Vue.js', 'Rest', 'Docker', 'PostgreSQL','Diesel ORM'],
    },
    {
        id: 2,
        name: 'Neu Talk',
        description: 'This is a project description',
        githubLink: 'https://github.com/xiangxichen26/NeuTalk',
        image: neuTalk,
        techStack: ['Vue.js', 'Django', 'Rest'],
    },
]

export default projectList;