// Tailwind Configuration
tailwind.config = {
    theme: {
        extend: {
            colors: {
                agilex: {
                    blue: '#C8102E',
                    dark: '#1A1A1A',
                    gray: '#F5F7FA',
                    accent: '#E31C3D'
                }
            }
        }
    }
};

// Alpine.js App Logic
function app() {
    return {
        scrolled: false,
        mobileMenu: false,

        // Matrix Effect
        matrixColumns: [],
        initMatrix() {
            const columnCount = Math.floor(window.innerWidth / 30);
            const chars = "0101010101010101<>[]{}/\\*&^%$#@!ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            this.matrixColumns = Array.from({ length: columnCount }, (_, i) => {
                const duration = 5 + Math.random() * 10;
                const delay = Math.random() * 5;
                const left = (i / columnCount) * 100;
                // Generate a random string for each column
                let str = "";
                for(let j=0; j<20; j++) str += chars.charAt(Math.floor(Math.random() * chars.length)) + " ";
                return { left: left + '%', duration: duration + 's', delay: delay + 's', content: str };
            });
        },
        
        // Project Filtering Logic
        activeType: 'All',
        projectTypes: ['All', 'Robotic Arms', 'Mobile Robot Chassis', 'Mobile Aloha', 'Data Collection'],
        
        // Repo Filtering Logic
        activeRepoType: 'All',
        repoTypes: ['All', 'Docs & Tutorials', 'Dev Tools', 'Base Drivers', 'Robotic Arms', 'Simulation & Models'],

        get filteredProjects() {
            if (this.activeType === 'All') return this.latestProjects;
            return this.latestProjects.filter(p => p.typeList && p.typeList.includes(this.activeType));
        },

        getTypeCount(type) {
            if (this.activeRepoType === 'All') return this.latestProjects.length;
            return this.latestProjects.filter(p => p.typeList && p.typeList.includes(type)).length;
        },

        get filteredRepos() {
            if (this.activeRepoType === 'All') return this.repos;
            return this.repos.filter(r => r.typeList && r.typeList.includes(this.activeRepoType));
        },

        getRepoTypeCount(type) {
            if (type === 'All') return this.repos.length;
            return this.repos.filter(r => r.typeList && r.typeList.includes(type)).length;
        },

        latestProjects: [
            {
                id: 1,
                typeList: ['Embodied Intelligence'],
                title: 'Fast Action Sampling for ImmediaTE Reaction',
                authors: 'Yuxiang Lu, Zhe Liu, Xianzhe Fan, Zhenya Yang, Jinghua Hou, Junyi Li, Kaixin Ding, Hengshuang Zhao',
                hardwareList: [
                    { name: 'Cobot Magic', link: 'https://global.agilex.ai/products/cobot-magic' }
                ],
                date: '2026',
                desc: 'Real-time reaction in VLAs is constrained not only by inference latency, but also by how action chunks are generated and executed. FASTER introduces a new paradigm for fast action sampling under asynchronous execution. By compressing the sampling process for immediate reaction into a single step, FASTER achieves 10x acceleration over π0.5 and X-VLA, enabling real-time responsiveness in highly dynamic tasks such as table tennis.',
                tags: ['Vision Language Action', 'World Models', 'Robot Learning'],
                link: 'https://innovator-zero.github.io/FASTER/',
                social: {
                    wechat: 'none',
                    discourse: 'none',
                    hackster: 'none'
                }
            },
            {
                id: 2,
                typeList: ['Robotic Arms', 'Research'],
                title: 'RISE: Self-Improving Robot Policy with Compositional World Mode',
                authors: 'Jiazhi Yang,Kunyang Lin,Jinwei Li, Wencong Zhang,Tianwei Lin,Longyan Wu,Zhizhong Su,Hao Zhao,Ya-Qin Zhang,Li Chen,Ping Luo,Xiangyu Yue,Hongyang Li',
                hardwareList: [
                    { name: 'PiPER', link: 'https://global.agilex.ai/products/piper' }
                ],
                date: '2026',
                desc: 'The first study on leveraging world models as an effective learning environment for challenging real-world manipulation, bootstrapping performance on tasks requiring high dynamics, dexterity, and precision.',
                tags: ['RISE', 'Compositional World Models', 'Dexterous Manipulation'],
                link: 'https://arxiv.org/pdf/2602.11075',
                social: {
                    wechat: 'none',
                    discourse: 'none',
                    hackster: 'none'
                }
            },
            {
                id: 3,
                typeList: ['Robotic Arms', 'Data Collection'],
                title: 'DynamicVLA: A Vision-Language-Action Model for Dynamic Object Manipulation',
                authors: 'Haozhe Xie, Beichen Wen, Jiarui Zheng, Zhaoxi Chen , Fangzhou Hong , Haiwen Diao , Ziwei Liu',
                hardwareList: [
                    { name: 'PiPER', link: 'https://global.agilex.ai/products/piper' },
                    { name: 'Pika', link: 'https://global.agilex.ai/products/pika' }
                ],
                date: '2026',
                desc: 'DynamicVLA enables open-ended dynamic object manipulation by pairing a compact 0.4B VLM with low-latency Continuous Inference and Latent-aware Action Streaming, evaluated at scale through the new DOM benchmark in both simulation and the real world.',
                tags: ['DynamicVLA','low-latency Continuous Inference','Simulation'],
                link: 'https://www.infinitescript.com/project/dynamic-vla',
                social: {
                    wechat: 'none',
                    discourse: 'none',
                    hackster: 'none'
                }
            },
            {
                id: 4,
                typeList: ['Project', 'Hardware'],
                title: 'DynamicVLA: A Vision-Language-Action Model for Dynamic Object Manipulation',
                authors: 'Haozhe Xie, Beichen Wen, Jiarui Zheng, Zhaoxi Chen , Fangzhou Hong , Haiwen Diao , Ziwei Liu',
                hardwareList: [
                    { name: 'PiPER', link: 'https://global.agilex.ai/products/piper' },
                    { name: 'Pika', link: 'https://global.agilex.ai/products/pika' }
                ],
                date: '2026',
                desc: 'DynamicVLA enables open-ended dynamic object manipulation by pairing a compact 0.4B VLM with low-latency Continuous Inference and Latent-aware Action Streaming, evaluated at scale through the new DOM benchmark in both simulation and the real world.',
                tags: ['DynamicVLA','low-latency Continuous Inference','Simulation'],
                link: 'https://www.infinitescript.com/project/dynamic-vla',
                social: {
                    wechat: 'none',
                    discourse: 'none',
                    hackster: 'none'
                }
            },
        ],
        repos: [
            { title: 'AgileX-Robotics-user-manuals', desc: 'The user manuals for all agilex chassis can be found here.', lang: '——', typeList: ['Docs & Tutorials'], link: 'https://github.com/agilexrobotics/AgileX-Robotics-all-products-user-manuals' },
            { title: 'Agilex-College', desc: 'Open-source demos and tutorials based on the full product lineup from AgileX Robotics.', lang: 'C++', typeList: ['Docs & Tutorials'], link: 'https://github.com/agilexrobotics/Agilex-College' },
            { title: 'UGV_GAZEBO_SIM', desc: 'The Gazebo simulation and URDF models for the chassis can be found here.', lang: 'C++ / Python',  typeList: ['Simulation & Models'], link: 'https://github.com/agilexrobotics/ugv_gazebo_sim' },
            { title: 'UGV_SDK', desc: '	The UGV_SDK for chassis development is available in C++ and can be used in Linux、Windows.', lang: 'C++', typeList: ['Dev Tools'], link: 'https://github.com/agilexrobotics/ugv_sdk' },
            { title: 'Scout_ROS1', desc: 'The ROS1 driver packages for the Scout series can be found here.', lang: 'C++', typeList: ['Base Drivers'], link: 'https://github.com/agilexrobotics/scout_ros' },
            { title: 'Hunter_ROS1', desc: 'The ROS1 driver packages for the Hunter series can be found here.', lang: 'C++',  typeList: ['Base Drivers'], link: 'https://github.com/agilexrobotics/hunter_ros' },
            { title: 'Bunker_ROS1', desc: 'The ROS1 driver packages for the Bunker series can be found here.', lang: 'C++',  typeList: ['Base Drivers'], link: 'https://github.com/agilexrobotics/bunker_ros' },
            { title: 'Tracer_ROS1', desc: 'The ROS1 driver packages for the Tracer series can be found here.', lang: 'C++',  typeList: ['Base Drivers'], link: 'https://github.com/agilexrobotics/tracer_ros' },
            { title: 'Limo_ROS1', desc: 'The ROS1 driver packages for the Limo series can be found here.', lang: 'C++',  typeList: ['Base Drivers'], link: 'https://github.com/agilexrobotics/limo_ros' },
            { title: 'Ranger_ROS1', desc: 'The ROS1 driver packages for the Ranger series can be found here.', lang: 'C++',  typeList: ['Base Drivers'], link: 'https://github.com/agilexrobotics/ranger_ros' },
            { title: 'Scout_ROS2', desc: 'The ROS2 driver packages for the Scout series can be found here.', lang: 'C++ / Python', typeList: ['Base Drivers'], link: 'https://github.com/agilexrobotics/scout_ros2' },
            { title: 'Hunter_ROS2', desc: 'The ROS2 driver packages for the Hunter series can be found here.', lang: 'C++ ',  typeList: ['Base Drivers'], link: 'https://github.com/agilexrobotics/hunter_ros2' },
            { title: 'Bunker_ROS2', desc: 'The ROS2 driver packages for the Bunker series can be found here.', lang: 'C++ / Python',  typeList: ['Base Drivers'], link: 'https://github.com/agilexrobotics/bunker_ros2' },
            { title: 'Tracer_ROS2', desc: 'The ROS2 driver packages for the Tracer series can be found here.', lang: 'C++ / Python',  typeList: ['Base Drivers'], link: 'https://github.com/agilexrobotics/tracer_ros2' },
            { title: 'Limo_ROS2', desc: 'The ROS2 driver packages for the Limo series can be found here.', lang: 'C++ / Python',  typeList: ['Base Drivers'], link: 'https://github.com/agilexrobotics/limo_ros2' },
            { title: 'Ranger_ROS2', desc: 'The ROS2 driver packages for the Ranger series can be found here.', lang: 'C++ / Python',  typeList: ['Base Drivers'], link: 'https://github.com/agilexrobotics/ranger_ros2' },
            { title: 'Limo', desc: 'LIMO is the world‘s first ROS development platform that integrates four motion modes. This project provides product user manuals and development documentation.', lang: '——',  typeList: ['Docs & Tutorials'], link: 'https://github.com/agilexrobotics/limo-doc' },
            { title: 'Limo PRO', desc: 'LIMO PRO Product User Manual', lang: '——',  typeList: ['Docs & Tutorials'], link: 'https://github.com/agilexrobotics/limo_pro_doc' },
            { title: 'Limo ROS2', desc: 'LIMO ROS2 Product User Manual', lang: '——',  typeList: ['Docs & Tutorials'], link: 'https://github.com/agilexrobotics/limo_ros2_doc' },
            { title: 'Limo Cobot Sim', desc: 'LIMO_Cobot Simulation Tutorial', lang: 'C++',  typeList: ['Simulation & Models'], link: 'https://github.com/agilexrobotics/limo_cobot_sim' },
            { title: 'Piper Robot Arm SDK User Manual', desc: 'The new robotic arm SDK for the PiPER robot arm.', lang: 'Python',  typeList: ['Robotic Arms'], link: 'https://github.com/agilexrobotics/piper_sdk' },
            { title: 'Mobile_aloha_sim', desc: 'The code implementation for various simulations for MOBILE_ALOHA are available here.', lang: 'Python',  typeList: ['Simulation & Models'], link: 'https://github.com/agilexrobotics/mobile_aloha_sim/tree/v2.0.0' },
            { title: 'AGILEX MOBILE_ALOHA', desc: 'The code implementation for  AGILEX MOBILE_ALOHA  are available here.', lang: 'Python',  typeList: ['Simulation & Models'], link: 'https://github.com/agilexrobotics/mobile-aloha' },
            { title: 'pyAgxArm User Guide', desc: 'The SDK for the robotic arm are here.', lang: 'Python',  typeList: ['Robotic Arms'], link: 'https://github.com/agilexrobotics/pyAgxArm' },
            { title: 'AgileX Robotic Arm ROS2 Driver', desc: 'The ROS2 driver packages for the robotic arm are here.', lang: 'Python',  typeList: ['Robotic Arms'], link: 'https://github.com/agilexrobotics/agx_arm_ros' },
            { title: 'AgileX Robotic Arm URDF Models', desc: 'This repository contains URDF / Xacro model files and 3D mesh resources for AgileX series robotic arms, for ROS / ROS2 visualization, simulation, and motion planning.', lang: '——',  typeList: ['Robotic Arms'], link: 'https://github.com/agilexrobotics/agx_arm_urdf' },
            { title: 'agx_arm_sim', desc: 'AgileX robotic arm ROS2 simulation & development toolkit provides full function packages for algorithm development, simulation testing and visual debugging.', lang: '——',  typeList: ['Robotic Arms'], link: 'https://github.com/agilexrobotics/agx_arm_sim' },
            { title: 'NAVIS', desc: 'The API usage demos for the NAVIS navigation system are available here. Development is primarily done on Ubuntu 18.04, and Windows is not supported.', lang: 'Python',  typeList: ['Dev Tools'], link: 'https://github.com/agilexrobotics/agx_arm_urdf' },
            { title: 'pika_ros', desc: 'Pika Data Suite Product is a spatial data acquisition product designed for data acquisition scenarios in the field of embodied intelligence', lang: 'Python / C++',  typeList: ['Dev Tools'], link: 'https://github.com/agilexrobotics/pika_ros' },

        ],
      
        init() {
            this.initMatrix();
            window.addEventListener('scroll', () => {
                this.scrolled = window.scrollY > 20;
            });
            // Auto-play slides
            this.slideInterval = setInterval(() => {
                this.nextSlide();
            }, 5000);
        },
        nextSlide() {
            this.slideDirection = 'right';
            this.activeSlide = (this.activeSlide + 1) % this.slides.length;
        },
        prevSlide() {
            this.slideDirection = 'left';
            this.activeSlide = (this.activeSlide - 1 + this.slides.length) % this.slides.length;
        },

    };
}