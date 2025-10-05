// js/artifacts.js
const artifacts = [
    {
        id: 'bronze-vessel',
        zh_name: '青铜器',
        en_name: 'Bronze Ritual Vessel',
        image: 'assets/images/bronze_vessel_thumb.jpg',
        model: 'assets/3d_models/bronze_vessel.glb',
        zh_desc: '这件精美的青铜器是商朝晚期的礼器，用于祭祀仪式。器身饰有饕餮纹，线条流畅，工艺精湛...',
        en_desc: 'This exquisite bronze vessel is a ritual object from the late Shang dynasty, used for sacrificial ceremonies. The body is decorated with taotie patterns, featuring smooth lines and superb craftsmanship...'
    },
    {
        id: 'terracotta-warrior',
        zh_name: '兵马俑',
        en_name: 'Terracotta Warrior',
        image: 'assets/images/terracotta_warrior_thumb.jpg',
        model: 'assets/3d_models/terracotta_warrior.glb',
        zh_desc: '秦始皇兵马俑是世界第八大奇迹，这些陶制雕塑栩栩如生，展现了秦朝强大的军事实力...',
        en_desc: 'The Terracotta Army is one of the Eight Wonders of the World. These lifelike pottery sculptures showcase the mighty military power of the Qin Dynasty...'
    },
    {
        id: 'tang-official',
        zh_name: '唐代文官俑',
        en_name: 'Tang Dynasty Official Figurine',
        image: 'images/aa.png',
        model: 'models/tang_official.glb',
        zh_desc: '这尊唐代文官俑出土于唐代墓葬，造型生动，服饰精美，展现了盛唐时期文官的服饰特点和精神风貌。',
        en_desc: 'This Tang Dynasty official figurine was unearthed from a Tang dynasty tomb. Its vivid form and exquisite attire showcase the clothing characteristics and spiritual demeanor of officials during the prosperous Tang Dynasty.'
    },
    // 新增文物 4
    {
        id: 'jade-bi',
        zh_name: '良渚文化玉璧',
        en_name: 'Liangzhu Culture Jade Bi Disc',
        image: 'assets/images/jade_bi_thumb.jpg', 
        model: 'assets/3d_models/jade_bi.glb', 
        zh_desc: '良渚文化时期的玉璧，距今约 5000 年。玉璧在古代被视为重要礼器和财富象征，体现了史前中国高度发达的玉器制作水平和宗教信仰。',
        en_desc: 'A Jade Bi disc from the Liangzhu culture, dating back about 5,000 years. The Bi disc was a significant ritual object and a symbol of wealth in ancient times, reflecting the advanced jade craftsmanship and religious beliefs of prehistoric China.'
    },
    // 新增文物 5
    {
        id: 'famille-rose-vase',
        zh_name: '粉彩九桃天球瓶',
        en_name: 'Famille Rose Nine Peach Vase',
        image: 'assets/images/famille_rose_vase_thumb.jpg', 
        model: 'assets/3d_models/famille_rose_vase.glb', 
        zh_desc: '清代乾隆年间的粉彩瓷器代表作。瓶身绘有九只仙桃，寓意长寿吉祥，色彩艳丽，绘画精细，代表了清代宫廷瓷器制作的巅峰。',
        en_desc: 'A masterpiece of the Famille Rose porcelain from the Qianlong period of the Qing Dynasty. The vase features nine immortal peaches, symbolizing longevity and good fortune. Its vibrant colors and delicate painting represent the peak of Qing court porcelain production.'
    },
    // 新增文物 6
    {
        id: 'gilt-bronze-buddha',
        zh_name: '十六国时期鎏金铜佛',
        en_name: 'Sixteen Kingdoms Gilt Bronze Buddha',
        image: 'assets/images/gilt_bronze_buddha_thumb.jpg', 
        model: 'assets/3d_models/gilt_bronze_buddha.glb', 
        zh_desc: '这尊小巧的鎏金铜佛像制作于中国佛教兴盛的十六国时期。佛像线条简洁，金光闪烁，是早期佛教艺术“秀骨清像”风格的体现。',
        en_desc: 'This small gilt bronze Buddha statue was made during the Sixteen Kingdoms period, when Buddhism flourished in China. The simple lines and gleaming gold reflect the "lean and graceful" style of early Buddhist art.'
    },
    // 新增文物 7
    {
        id: 'oracle-bone',
        zh_name: '甲骨文卜辞',
        en_name: 'Oracle Bone Inscription',
        image: 'assets/images/oracle_bone_thumb.jpg', 
        model: 'assets/3d_models/oracle_bone.glb', 
        zh_desc: '刻有卜辞的龟甲或兽骨，是商代王室用于占卜的文物，也是中国已知最早的成体系文字。其内容记录了商朝的政治、天文和祭祀活动。',
        en_desc: 'Turtle shells or animal bones inscribed with divination texts, used by the Shang royal family for prophecy. They represent the earliest systematic writing system known in China, documenting Shang politics, astronomy, and sacrificial activities.'
    },
    // 新增文物 8
    {
        id: 'silk-painting',
        zh_name: '马王堆 T 型帛画',
        en_name: 'Mawangdui T-shaped Silk Painting',
        image: 'assets/images/silk_painting_thumb.jpg', 
        model: 'assets/3d_models/silk_painting.glb', 
        zh_desc: '出土于西汉马王堆汉墓，T 形结构，描绘了天上、人间和地下三个世界。此画是研究汉代神话、宗教信仰和绘画技艺的稀有珍品。',
        en_desc: 'Excavated from the Mawangdui Han Tomb of the Western Han Dynasty. Its T-shape depicts three realms: heaven, human world, and the underworld. It is a rare treasure for studying Han dynasty mythology, religious beliefs, and painting techniques.'
    },
    // 新增文物 9
    {
        id: 'cizhou-pillow',
        zh_name: '宋代磁州窑瓷枕',
        en_name: 'Song Dynasty Cizhou Ware Porcelain Pillow',
        image: 'assets/images/cizhou_pillow_thumb.jpg', 
        model: 'assets/3d_models/cizhou_pillow.glb', 
        zh_desc: '宋代磁州窑出产的瓷枕，造型简洁，装饰技法多样，常以黑色釉彩描绘生动的纹饰。瓷枕不仅是卧具，也是当时流行的工艺品。',
        en_desc: 'A porcelain pillow produced by the Cizhou kiln during the Song Dynasty. It features a simple shape and diverse decorative techniques, often using black glaze to depict lively patterns. It was both a bedding item and a popular craft piece.'
    }
];