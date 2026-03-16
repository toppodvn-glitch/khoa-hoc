import React, { useState, useRef, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import YouTube from 'react-youtube';
import { 
  CheckCircle2, Star, Phone, Mail, MapPin, 
  Facebook, Youtube, Check, ArrowRight, Users, Target, 
  MessageCircle, XCircle, Zap, TrendingUp, ShieldCheck, Smartphone,
  PlayCircle, Award, BookOpen, Clock, PlaySquare, DollarSign, Flame,
  Gift, Calculator, ListChecks, FolderOpen, ChevronDown
} from 'lucide-react';
import { motion } from 'motion/react';

const SectionTitle = ({ title, subtitle }: { title: React.ReactNode, subtitle?: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="flex flex-col items-center justify-center mb-12 relative z-10 text-center"
  >
    {subtitle && (
      <span className="text-yellow-500 font-bold tracking-widest uppercase text-sm mb-3 px-4 py-1 bg-yellow-500/10 rounded-full border border-yellow-500/20">
        {subtitle}
      </span>
    )}
    <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight max-w-4xl">
      {title}
    </h2>
    <div className="w-24 h-1.5 bg-gradient-to-r from-yellow-600 to-yellow-400 mt-6 rounded-full"></div>
  </motion.div>
);

const CountdownTimer = ({ initialHours = 12 }) => {
  const [timeLeft, setTimeLeft] = useState(initialHours * 60 * 60);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timerId = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);
    return () => clearInterval(timerId);
  }, [timeLeft]);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="flex items-center gap-1.5 font-mono text-base font-bold">
      <div className="flex flex-col items-center bg-slate-900/80 px-2 py-1 rounded border border-slate-700/50 min-w-[36px]">
        <span className="text-yellow-400 leading-none">{hours.toString().padStart(2, '0')}</span>
        <span className="text-[8px] text-slate-400 uppercase font-sans mt-0.5">Giờ</span>
      </div>
      <span className="text-slate-500 animate-pulse mb-2">:</span>
      <div className="flex flex-col items-center bg-slate-900/80 px-2 py-1 rounded border border-slate-700/50 min-w-[36px]">
        <span className="text-yellow-400 leading-none">{minutes.toString().padStart(2, '0')}</span>
        <span className="text-[8px] text-slate-400 uppercase font-sans mt-0.5">Phút</span>
      </div>
      <span className="text-slate-500 animate-pulse mb-2">:</span>
      <div className="flex flex-col items-center bg-slate-900/80 px-2 py-1 rounded border border-slate-700/50 min-w-[36px]">
        <span className="text-yellow-400 leading-none">{seconds.toString().padStart(2, '0')}</span>
        <span className="text-[8px] text-slate-400 uppercase font-sans mt-0.5">Giây</span>
      </div>
    </div>
  );
};

const CourseRating = () => {
  const [rating] = useState(() => (Math.random() * (5.0 - 4.9) + 4.9).toFixed(1));
  const [reviews] = useState(() => Math.floor(Math.random() * (508 - 408 + 1) + 408));
  
  return (
    <div className="flex items-center gap-2 mb-3">
      <div className="flex items-center text-yellow-400">
        <Star className="w-4 h-4 fill-current" />
        <span className="ml-1 font-bold text-sm">{rating}</span>
      </div>
      <span className="text-slate-400 text-xs">({reviews} đánh giá)</span>
    </div>
  );
};

const CourseInfo = ({ duration = "0.71 giờ", lessons = "11 bài học" }) => (
  <div className="grid grid-cols-2 gap-y-4 gap-x-2 mb-6 bg-slate-900/50 p-4 rounded-2xl border border-slate-700/50">
    <div className="flex items-center gap-2.5 text-sm text-slate-300">
      <div className="w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center shrink-0">
        <Clock className="w-4 h-4 text-yellow-500" />
      </div>
      <div className="flex flex-col">
        <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Thời lượng</span>
        <span className="font-medium text-white">{duration}</span>
      </div>
    </div>
    <div className="flex items-center gap-2.5 text-sm text-slate-300">
      <div className="w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center shrink-0">
        <BookOpen className="w-4 h-4 text-yellow-500" />
      </div>
      <div className="flex flex-col">
        <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Giáo trình</span>
        <span className="font-medium text-white">{lessons}</span>
      </div>
    </div>
    <div className="flex items-center gap-2.5 text-sm text-slate-300">
      <div className="w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center shrink-0">
        <Star className="w-4 h-4 text-yellow-500" />
      </div>
      <div className="flex flex-col">
        <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Sở hữu</span>
        <span className="font-medium text-white">Trọn đời</span>
      </div>
    </div>
    <div className="flex items-center gap-2.5 text-sm text-slate-300">
      <div className="w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center shrink-0">
        <Award className="w-4 h-4 text-yellow-500" />
      </div>
      <div className="flex flex-col">
        <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Chứng nhận</span>
        <span className="font-medium text-white">Hoàn thành</span>
      </div>
    </div>
  </div>
);

const CTABlock = ({ title = "Bắt Đầu Hành Trình Của Bạn Ngay Hôm Nay" }) => (
  <div className="flex flex-col items-center text-center mt-12 w-full">
    {title && <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">{title}</h3>}
    <a href="#hoc-thu" className="group relative inline-flex items-center justify-center px-6 md:px-10 py-4 md:py-5 font-black text-slate-900 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(234,179,8,0.5)] w-full md:w-auto">
      <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-full group-hover:h-56 opacity-20"></span>
      <span className="relative flex items-center gap-2 text-lg md:text-xl uppercase tracking-wide">
        Đăng Ký Học Thử Ngay - MIỄN PHÍ <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
      </span>
    </a>
    <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-6 text-sm text-slate-300 font-medium">
      <span className="flex items-center gap-1.5"><ShieldCheck className="w-5 h-5 text-green-400" /> Không nhập form rườm rà</span>
      <span className="flex items-center gap-1.5"><ShieldCheck className="w-5 h-5 text-green-400" /> Không cần nhập thẻ</span>
      <span className="flex items-center gap-1.5"><ShieldCheck className="w-5 h-5 text-green-400" /> Đăng nhập nhanh với Google</span>
    </div>
    <div className="mt-6 inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 text-red-400 px-5 py-2.5 rounded-full text-sm font-bold animate-pulse">
      <Zap className="w-4 h-4" /> Chớp thời cơ - Chỉ có 1 lần khóa học này mở miễn phí!
    </div>
  </div>
);

const ModuleCard = ({ number, title, desc, icon: Icon, features, delay = 0 }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay, ease: "easeOut" }}
    className="bg-slate-800/40 border border-slate-700 hover:border-yellow-500/50 p-8 rounded-3xl transition-all duration-300 hover:bg-slate-800/80 group relative overflow-hidden"
  >
    <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/5 rounded-bl-full -z-10 group-hover:bg-yellow-500/10 transition-colors"></div>
    <div className="flex items-center gap-4 mb-6">
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-800 border border-slate-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
        <Icon className="w-7 h-7 text-yellow-400" />
      </div>
      <div>
        <div className="text-yellow-500 font-black text-sm tracking-wider uppercase mb-1">{number}</div>
        <h3 className="text-xl font-bold text-white leading-tight">{title}</h3>
      </div>
    </div>
    <p className="text-slate-400 mb-6 leading-relaxed">{desc}</p>
    <ul className="space-y-3">
      {features.map((feat: string, idx: number) => (
        <li key={idx} className="flex items-start gap-3 text-slate-300 text-sm font-medium">
          <CheckCircle2 className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
          <span>{feat}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

const CaseStudyCard = ({ name, segment, revenue, image, quote, delay = 0 }: any) => (
  <motion.div 
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
    className="bg-slate-800/50 border border-slate-700 rounded-3xl overflow-hidden flex flex-col md:flex-row items-center group hover:border-yellow-500/30 transition-colors"
  >
    <div className="w-full md:w-2/5 h-64 md:h-auto relative overflow-hidden">
      <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
      <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-slate-900 via-slate-900/40 to-transparent"></div>
      <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6">
        <div className="bg-yellow-500 text-slate-900 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">
          {segment}
        </div>
        <h4 className="text-2xl font-black text-white">{name}</h4>
      </div>
    </div>
    <div className="w-full md:w-3/5 p-8 md:p-10 flex flex-col justify-center relative">
      <Star className="absolute top-8 right-8 w-24 h-24 text-slate-700/20 -z-10" />
      <div className="flex gap-1 mb-6">
        {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
      </div>
      <p className="text-slate-300 text-lg md:text-xl italic mb-8 leading-relaxed relative z-10">
        "{quote}"
      </p>
      <div className="border-t border-slate-700 pt-6">
        <div className="text-sm text-slate-400 font-medium uppercase tracking-wider mb-1">Kết quả đạt được</div>
        <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">
          {revenue}
        </div>
      </div>
    </div>
  </motion.div>
);

const SalesPopup = () => {
  const names = [
    "Nguyễn Hoàng Nam", "Trần Minh Tâm", "Lê Thị Tuyết", "Phạm Văn Hùng", "Hoàng Diệu Linh", 
    "Vũ Quốc Anh", "Đặng Thu Thảo", "Bùi Tiến Dũng", "Đỗ Minh Quân", "Ngô Thanh Vân", 
    "Lý Hải", "Trương Ngọc Ánh", "Phan Mạnh Quỳnh", "Hồ Hoài Anh", "Dương Triệu Vũ", 
    "Lâm Khánh Chi", "Cao Thiên Trang", "Đinh Ngọc Diệp", "Mai Thu Huyền", "Đào Bá Lộc", 
    "Lương Bằng Quang", "Phùng Ngọc Huy", "Tạ Biên Cương", "Quách Tuấn Du", "Khổng Minh", 
    "Đoàn Văn Hậu", "Tăng Duy Tân", "Hà Nhi", "Sơn Thạch", "Thùy Chi", 
    "Nguyễn Kỳ Anh", "Huỳnh Trấn Thành", "Võ Trường Giang", "Ninh Dương Lan Ngọc", "Trần Diệu Nhi", 
    "Nguyễn Anh Tú", "Trần Thu Trang", "Nguyễn Tiến Luật", "Kiều Minh Tuấn", "Đỗ Cát Phượng", 
    "Hứa Vĩ Văn", "Vũ Diễm My", "Trần Nhã Phương", "Lê Bảo Anh", "Phạm Isaac", 
    "Jun Phạm", "Ngô Kiến Huy", "Nguyễn Sam", "Đặng Midu", "Nguyễn Thanh Tùng"
  ];
  
  const actions = ["vừa chuyển khoản thành công", "vừa mua khoá học"];
  
  const [current, setCurrent] = useState<{name: string, action: string, time: string} | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showRandomNotification = () => {
      const randomName = names[Math.floor(Math.random() * names.length)];
      const randomAction = actions[Math.floor(Math.random() * actions.length)];
      const randomTime = Math.floor(Math.random() * 5) + 1;
      
      setCurrent({
        name: randomName,
        action: randomAction,
        time: `${randomTime} phút trước`
      });
      setIsVisible(true);

      // Hide after 5 seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    };

    // Initial delay
    const initialTimeout = setTimeout(showRandomNotification, 3000);

    // Interval for subsequent notifications
    const interval = setInterval(() => {
      showRandomNotification();
    }, 12000); // Every 12 seconds

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  if (!current) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-24 md:bottom-6 left-6 z-[60] pointer-events-none"
    >
      <div className="bg-slate-900/95 backdrop-blur-md border border-slate-700/50 p-3 rounded-2xl shadow-2xl flex items-center gap-3 max-w-[280px]">
        <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center shrink-0">
          <CheckCircle2 className="w-6 h-6 text-yellow-500" />
        </div>
        <div className="flex flex-col">
          <div className="text-xs font-bold text-white leading-tight">
            <span className="text-yellow-400">{current.name}</span> {current.action}
          </div>
          <div className="text-[10px] text-slate-500 mt-1 font-medium flex items-center gap-1">
            <Clock className="w-3 h-3" /> {current.time}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const trialVideos = [
  {
    id: 'UpP7qGU51Kg',
    title: 'Mục sở thị những kết quả Nguyễn Nam đã thực hiện nhờ Content Ads Win',
    duration: '05:00',
    isImportant: true,
    tag: 'Free',
    customTag: 'Mới'
  },
  {
    id: 'iBnpH9jt4tM',
    title: 'Tầm quan trọng của Content trong việc chạy quảng cáo BĐS',
    duration: '04:30',
    isImportant: true,
    tag: 'Free'
  },
  {
    id: 'Ib8j-d9gn9g',
    title: 'Học viên nói gì về khoá học Content Ads Win',
    duration: '02:45',
    isImportant: true,
    tag: 'Free'
  },
  {
    id: 'KWQpfaloovE',
    title: 'Nội dung học thử Content Ads Win',
    duration: '05:00',
    isImportant: true,
    tag: 'Free'
  },
  {
    id: 'IFx7mkFBKtA',
    title: 'Nên học qua bộ video E-LEARNING hơn học offline vì 5 lý do sau đây',
    duration: '03:31',
    isImportant: false,
    tag: 'Free'
  },
  {
    id: 'rOKpMxx29O8',
    title: 'Vì sao bạn tư vấn mãi mà khách chưa chốt? Có thể bạn nói sai "nỗi đau" của khách hàng',
    duration: '03:30',
    isImportant: true,
    tag: 'Free',
    customTag: 'Nổi bật'
  }
];

const feedbackImages = [
  "https://i.postimg.cc/8kHN62Dd/z7612808083321-8d444b2adba1260eeb5fd7e8d16dd86c.jpg",
  "https://i.postimg.cc/ZYc4dGZ6/z7612808089737-334595f4632cdfa82703434ac0070300.jpg",
  "https://i.postimg.cc/WpnTkBjG/z7612808098982-699a5c952eda8e3240458503bc8a7c4e.jpg",
  "https://i.postimg.cc/Y23MW5kf/z7612808103172-deab6f11186f11060ff419e303a5fa4b.jpg",
  "https://i.postimg.cc/c1m0npZB/z7612808106792-2e195231916f548fc4dbd1d923105449.jpg",
  "https://i.postimg.cc/1RHsqkPH/z7612808111117-ea52df8c714bbd63941d22d4585f1884.jpg",
  "https://i.postimg.cc/dQBwybv6/z7612808123795-4ffaa19a439a9840a647b81a16abbb24.jpg",
  "https://i.postimg.cc/593bCh1m/z7612808126467-34694c16944d06a326e9e08ca8233cb2.jpg",
  "https://i.postimg.cc/h4rcdkgM/z7612808128478-e74704d1b3f9ac32a8b3fea6bcf324ed.jpg",
  "https://i.postimg.cc/HW2dyqHB/z7612808141286-da7ee73df50dd2637f4ba34a8260c8d2.jpg",
  "https://i.postimg.cc/QNbhT2sy/z7612808145776-829acf5ce39a75aac09149558755a122.jpg",
  "https://i.postimg.cc/MZDqQCxP/z7612808151597-3f3655a649e46a22f57b8666bf5293a6.jpg",
  "https://i.postimg.cc/3rBYvs7L/z7612808156407-12cac772c65a1996d9b955cf6194c31b.jpg",
  "https://i.postimg.cc/h4rcdkgZ/z7612808157607-d0dddf8d68c4bbce774ef47c3b00a569.jpg",
  "https://i.postimg.cc/nVkpDyZg/z7612808161467-98ebde8d322c2051537d6aa91f8bdb64.jpg",
  "https://i.postimg.cc/L4T21cRr/z7612808168080-9800c824b0773372a0bf5bcb04ac117e.jpg",
  "https://i.postimg.cc/NfjY7dfb/z7612808175604-32f91d6bc60871056d4c8b7a110064c7.jpg",
  "https://i.postimg.cc/9FQVtLFJ/z7612808184611-619dea354c101d728003d325a500f380.jpg",
  "https://i.postimg.cc/Qxdskfx6/z7612808187113-d9a04c2624c45fc3e93cf07a053d2cbd.jpg",
  "https://i.postimg.cc/vHZML0Hq/z7612808198602-cace105ef451e28f71933dccc3aefba2.jpg",
  "https://i.postimg.cc/GhmrJXhg/z7612808206051-fe7f96bd0079acf186166fd39b803831.jpg",
  "https://i.postimg.cc/jdSKQMdk/z7612808208971-d4104d308bdcf526c86edd2f970de594.jpg"
];

export default function App() {
  const [activeVideoId, setActiveVideoId] = useState(trialVideos[0].id);
  const [isPlaying, setIsPlaying] = useState(false);

  const activeVideo = trialVideos.find(v => v.id === activeVideoId) || trialVideos[0];

  return (
    <div className="min-h-screen bg-[#0b1120] text-slate-50 font-sans selection:bg-yellow-500 selection:text-slate-900">
      <SalesPopup />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0b1120]/90 backdrop-blur-lg border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="text-2xl font-black tracking-tighter flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded flex items-center justify-center text-slate-900">N</div>
            <span>NGUYỄN NAM <span className="text-yellow-500">BĐS</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-300">
            <a href="#" className="hover:text-yellow-400 transition-colors">Trang chủ</a>
            <a href="#chuong-trinh" className="hover:text-yellow-400 transition-colors">Chương trình</a>
            <a href="#hoc-thu" className="hover:text-yellow-400 transition-colors">Học thử</a>
            <a href="#ket-qua" className="hover:text-yellow-400 transition-colors">Kết quả</a>
          </div>
          <div className="flex items-center gap-4">
            <a href="#hoc-thu" className="inline-block bg-yellow-500 hover:bg-yellow-400 text-slate-900 px-6 py-2.5 rounded-full font-bold transition-all shadow-[0_0_15px_rgba(234,179,8,0.3)] hover:shadow-[0_0_25px_rgba(234,179,8,0.5)] text-sm">
              Học Thử Miễn Phí
            </a>
          </div>
        </div>
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative pt-20 pb-32 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b1120]/50 via-[#0b1120]/80 to-[#0b1120]"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-left"
              >
                <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-slate-800/80 border border-slate-700 text-yellow-400 text-sm font-bold tracking-wide mb-8">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
                  </span>
                  ĐÃ CÓ 800+ HỌC VIÊN HOÀN THÀNH KHOÁ HỌC
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] mb-6 tracking-tight">
                  Đánh Thức Vị Thế Lãnh Đạo <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200 text-5xl md:text-6xl lg:text-7xl mt-2 block">
                    Xây Dựng Đế Chế Kinh Doanh
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed font-medium">
                  Hành trình trở thành Best Seller với nghề môi giới BĐS. Tôi đã đúc kết kiến thức 4 năm trong nghề môi giới BĐS với 79 giao dịch năm trước để tạo ra khóa học này. Những kiến thức ở đây đều là thực chiến và có thể áp dụng được ngay vào công việc.
                </p>
                
                <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 mb-10">
                  <div className="flex items-center gap-4 mb-4">
                    <img src="https://i.postimg.cc/0ytb8gMk/anh-dai-dien-nam-2.jpg" alt="Nguyễn Nam" className="w-16 h-16 rounded-full object-cover border-2 border-yellow-500" />
                    <div>
                      <div className="font-bold text-white text-lg">Nguyễn Nam BĐS</div>
                      <div className="text-yellow-500 text-sm font-medium">4+ Năm Kinh Nghiệm Thực Chiến</div>
                    </div>
                  </div>
                  <p className="text-slate-400 text-sm italic">"Tôi đã đúc kết kiến thức 4 năm trong nghề môi giới BĐS với 79 giao dịch năm trước để tạo ra khóa học này. Những kiến thức ở đây đều là thực chiến và có thể áp dụng được ngay vào công việc."</p>
                </div>

                <CTABlock title="" />
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative hidden lg:block"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/20 to-transparent rounded-full blur-3xl"></div>
                <img 
                  src="https://i.postimg.cc/hGPTrbxc/anh-khoa-hoc.jpg" 
                  alt="Thành công BĐS" 
                  className="relative z-10 rounded-3xl border border-slate-700 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500"
                />
                
                {/* Floating Stats Cards */}
                <div className="absolute -bottom-8 -left-8 bg-slate-800 border border-slate-700 p-6 rounded-2xl shadow-2xl z-20 animate-bounce" style={{ animationDuration: '3s' }}>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <div className="text-2xl font-black text-white">79+</div>
                      <div className="text-xs text-slate-400 font-bold uppercase">Giao dịch/năm</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -top-8 -right-8 bg-slate-800 border border-slate-700 p-6 rounded-2xl shadow-2xl z-20 animate-bounce" style={{ animationDuration: '4s' }}>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center">
                      <PlayCircle className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div>
                      <div className="text-2xl font-black text-white">100+</div>
                      <div className="text-xs text-slate-400 font-bold uppercase">Video bài giảng</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Social Proof Bar */}
        <section className="border-y border-slate-800 bg-slate-900/50 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-800">
              <div>
                <div className="text-3xl font-black text-white mb-1">800+</div>
                <div className="text-sm text-slate-400 font-medium">Học viên thành công</div>
              </div>
              <div>
                <div className="text-3xl font-black text-white mb-1">100+</div>
                <div className="text-sm text-slate-400 font-medium">Video thực chiến</div>
              </div>
              <div>
                <div className="text-3xl font-black text-white mb-1">9+</div>
                <div className="text-sm text-slate-400 font-medium">Kênh tìm kiếm KH</div>
              </div>
              <div>
                <div className="text-3xl font-black text-white mb-1">4+</div>
                <div className="text-sm text-slate-400 font-medium">Năm kinh nghiệm</div>
              </div>
            </div>
          </div>
        </section>

        {/* Modules Grid */}
        <section id="chuong-trinh" className="py-24 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle 
              subtitle="Khối lượng kiến thức khổng lồ" 
              title={<span>Tại Sao Bạn Cần Tham Gia<br/>Hệ Thống Đào Tạo Này?</span>} 
            />
            
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <ModuleCard 
                number="Kiến thức"
                title="Kiến Thức Thực Chiến"
                desc="Nói không với lý thuyết sáo rỗng. 100% kiến thức được đúc kết từ xương máu kinh doanh thực tế."
                icon={Star}
                features={[]}
                delay={0.1}
              />
              <ModuleCard 
                number="Cộng đồng"
                title="Cộng Đồng Tinh Hoa"
                desc="Kết nối với mạng lưới hơn 5.000 CEO, Leader và chủ doanh nghiệp trên toàn quốc."
                icon={Users}
                features={[]}
                delay={0.2}
              />
              <ModuleCard 
                number="Lộ trình"
                title="Lộ Trình Rõ Ràng"
                desc="Cam kết đồng hành 1:1 cho đến khi bạn ra kết quả. Cầm tay chỉ việc, sửa lỗi ngay lập tức."
                icon={Target}
                features={[]}
                delay={0.3}
              />
            </div>

            <div className="mt-16">
              <CTABlock title="Bạn Đã Sẵn Sàng Sở Hữu Toàn Bộ Hệ Thống Này?" />
            </div>
          </div>
        </section>

        {/* Trial Videos Section */}
        <section id="hoc-thu" className="py-24 relative bg-[#0f172a] scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle 
              subtitle="Trải nghiệm miễn phí" 
              title="Học Thử Ngay Để Cảm Nhận Chất Lượng" 
            />
            
            <div className="mt-16 flex flex-col md:flex-row-reverse gap-6 max-w-6xl mx-auto">
              {/* Player Area */}
              <div className="w-full md:w-2/3">
                <div className="bg-black rounded-2xl overflow-hidden shadow-2xl aspect-video relative border border-slate-700/50 group">
                  {!isPlaying ? (
                    <div 
                      className="absolute inset-0 w-full h-full cursor-pointer flex items-center justify-center"
                      onClick={() => setIsPlaying(true)}
                    >
                      <img 
                        src={`https://img.youtube.com/vi/${activeVideoId}/maxresdefault.jpg`}
                        alt="Video thumbnail"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors"></div>
                      
                      {/* Title Overlay */}
                      <div className="absolute top-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-b from-black/80 to-transparent z-10">
                        <h3 className="text-white text-lg md:text-xl font-medium line-clamp-2 drop-shadow-md">
                          {activeVideo.title}
                        </h3>
                      </div>

                      {/* Duration Overlay */}
                      <div className="absolute bottom-4 right-4 bg-black/80 text-white text-xs md:text-sm font-medium px-2 py-1 rounded z-10">
                        {activeVideo.duration}
                      </div>

                      <div className="relative z-10 w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(234,179,8,0.6)] group-hover:scale-110 transition-transform">
                        <div className="w-0 h-0 border-y-[12px] border-y-transparent border-l-[20px] border-l-slate-900 ml-2"></div>
                      </div>
                    </div>
                  ) : (
                    <YouTube
                      videoId={activeVideoId}
                      className="absolute inset-0 w-full h-full"
                      opts={{
                        width: '100%',
                        height: '100%',
                        playerVars: {
                          autoplay: 1,
                          modestbranding: 1,
                          rel: 0,
                          showinfo: 0,
                          iv_load_policy: 3,
                          controls: 0,
                          disablekb: 1,
                          fs: 0,
                          playsinline: 1
                        }
                      }}
                      onEnd={() => setIsPlaying(false)}
                    />
                  )}
                </div>
              </div>

              {/* Playlist Area */}
              <div className="w-full md:w-1/3 bg-[#1e1e2f] rounded-2xl border border-slate-700/50 p-4 flex flex-col h-[400px] md:h-auto md:max-h-[350px] lg:max-h-[500px] xl:max-h-[600px]">
                {/* Header */}
                <div className="flex items-center gap-4 text-slate-400 text-sm mb-4 pb-4 border-b border-slate-700/50 shrink-0">
                  <div className="flex items-center gap-2">
                    <PlaySquare className="w-4 h-4 text-purple-500" />
                    <span>Số lượng: <strong className="text-white">{trialVideos.length} video</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-purple-500" />
                    <span>Thời lượng: <strong className="text-white">01:00:06</strong></span>
                  </div>
                </div>

                {/* List */}
                <div className="space-y-3 overflow-y-auto pr-2 custom-scrollbar flex-1">
                  {trialVideos.map((video, index) => (
                    <div
                      key={`${video.id}-${index}`}
                      onClick={() => {
                        setActiveVideoId(video.id);
                        setIsPlaying(false);
                      }}
                      className={`flex gap-3 p-2.5 rounded-xl cursor-pointer transition-all ${
                        activeVideoId === video.id 
                          ? 'bg-slate-700/50 border border-slate-600' 
                          : 'hover:bg-slate-800/50 border border-transparent'
                      }`}
                    >
                      {/* Thumbnail */}
                      <div className="relative w-32 h-20 shrink-0 rounded-lg overflow-hidden border border-slate-700/50">
                        <img 
                          src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`} 
                          alt={video.title} 
                          className="w-full h-full object-cover" 
                        />
                        <div className="absolute top-1 right-1 bg-green-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full shadow-sm">
                          {String(index + 1).padStart(2, '0')}
                        </div>
                      </div>
                      {/* Info */}
                      <div className="flex flex-col justify-between py-0.5 flex-1 min-w-0">
                        <h4 className="text-slate-100 font-bold text-sm line-clamp-2 leading-snug">
                          {video.title}
                        </h4>
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex gap-2 flex-wrap">
                            {video.isImportant && (
                              <span className="bg-purple-600/90 text-white text-[10px] px-2 py-0.5 rounded flex items-center gap-1 font-medium">
                                <Star className="w-3 h-3 fill-current" /> Quan trọng
                              </span>
                            )}
                            {video.customTag && (
                              <span className="bg-purple-600/90 text-white text-[10px] px-2 py-0.5 rounded flex items-center gap-1 font-medium">
                                <Star className="w-3 h-3 fill-current" /> {video.customTag}
                              </span>
                            )}
                            <span className="bg-green-600/90 text-white text-[10px] px-2 py-0.5 rounded flex items-center gap-1 font-medium">
                              <DollarSign className="w-3 h-3" /> {video.tag}
                            </span>
                          </div>
                          <div className="flex items-center gap-1 text-slate-300 text-xs font-medium shrink-0">
                            <Clock className="w-3 h-3 text-purple-400" /> {video.duration}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Xem Toàn Bộ */}
            <div className="mt-12 flex flex-col items-center justify-center text-center">
              <a href="#thanh-toan" className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-slate-900 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(234,179,8,0.4)]">
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-full group-hover:h-56 opacity-20"></span>
                <span className="relative flex items-center gap-2 text-lg uppercase tracking-wide">
                  Xem Toàn Bộ <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-24 bg-slate-900/50 border-y border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle 
              subtitle="Sự Lựa Chọn Thông Minh" 
              title="Tại Sao Bạn Nên Chọn Học Qua Video Thay Vì Offline?" 
            />
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-16">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                className="bg-slate-800/30 border border-slate-700/50 rounded-3xl p-8 md:p-10"
              >
                <h3 className="text-2xl font-bold text-slate-400 mb-8 flex items-center gap-3">
                  <XCircle className="text-slate-500 w-8 h-8" /> Học Offline Truyền Thống
                </h3>
                <ul className="space-y-6">
                  <li className="flex gap-4 text-slate-400">
                    <XCircle className="w-6 h-6 text-slate-600 shrink-0" /> 
                    <span className="text-lg">Mất thời gian di chuyển, kẹt xe, mệt mỏi sau ngày làm việc.</span>
                  </li>
                  <li className="flex gap-4 text-slate-400">
                    <XCircle className="w-6 h-6 text-slate-600 shrink-0" /> 
                    <span className="text-lg">Học xong dễ quên, không thể xem lại khi cần áp dụng ngay vào thực tế.</span>
                  </li>
                  <li className="flex gap-4 text-slate-400">
                    <XCircle className="w-6 h-6 text-slate-600 shrink-0" /> 
                    <span className="text-lg">Chi phí đắt đỏ (hàng chục triệu đồng cho vài ngày học ngắn ngủi).</span>
                  </li>
                  <li className="flex gap-4 text-slate-400">
                    <XCircle className="w-6 h-6 text-slate-600 shrink-0" /> 
                    <span className="text-lg">Kiến thức cố định, khó cập nhật theo biến động thị trường.</span>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-yellow-500 rounded-3xl p-8 md:p-10 relative transform md:-translate-y-4 shadow-[0_0_40px_rgba(234,179,8,0.15)]"
              >
                <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-yellow-500 text-slate-900 font-black px-6 py-1.5 rounded-full text-sm tracking-wider uppercase shadow-lg">
                  Lựa Chọn Tối Ưu
                </div>
                <h3 className="text-2xl font-bold text-yellow-400 mb-8 flex items-center gap-3">
                  <CheckCircle2 className="text-yellow-400 w-8 h-8" /> Hệ Thống Online Này
                </h3>
                <ul className="space-y-6">
                  <li className="flex gap-4 text-white">
                    <CheckCircle2 className="w-6 h-6 text-yellow-400 shrink-0" /> 
                    <span className="text-lg font-medium">Học mọi lúc mọi nơi trên điện thoại/máy tính, tiết kiệm 80% thời gian.</span>
                  </li>
                  <li className="flex gap-4 text-white">
                    <CheckCircle2 className="w-6 h-6 text-yellow-400 shrink-0" /> 
                    <span className="text-lg font-medium">Sở hữu trọn đời 300+ videos, xem đi xem lại bất cứ khi nào quên.</span>
                  </li>
                  <li className="flex gap-4 text-white">
                    <CheckCircle2 className="w-6 h-6 text-yellow-400 shrink-0" /> 
                    <span className="text-lg font-medium">Chi phí cực kỳ tối ưu, chỉ bằng 1/10 so với các khóa học offline.</span>
                  </li>
                  <li className="flex gap-4 text-white">
                    <CheckCircle2 className="w-6 h-6 text-yellow-400 shrink-0" /> 
                    <span className="text-lg font-medium">Cập nhật liên tục các chiến lược & công cụ mới nhất (AI, ChatGPT).</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Featured Courses */}
        <section className="py-24 bg-slate-900/80 border-t border-slate-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl -z-10"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle 
              subtitle="Lộ Trình Tối Ưu" 
              title="Các Khóa Học Tiêu Biểu" 
            />
            
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              {/* Course 3 (Moved to first) */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                className="bg-slate-800/40 border border-slate-700 rounded-3xl overflow-hidden hover:border-yellow-500/50 transition-all duration-300 hover:-translate-y-2 group flex flex-col relative"
              >
                <div className="absolute top-4 right-4 z-10 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-[0_0_15px_rgba(220,38,38,0.8)] animate-pulse">
                  <Flame className="w-4 h-4" /> HOT DEAL
                </div>
                <div className="h-48 bg-gradient-to-br from-slate-700 to-slate-800 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://i.postimg.cc/h4ZHLczt/thumb-2.png')] bg-cover bg-center opacity-40 group-hover:scale-110 transition-transform duration-700"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-white mb-4 line-clamp-2 group-hover:text-yellow-400 transition-colors">
                    COMBO 2 KHÓA DÀNH CHO BEST SELLER
                  </h3>
                  <CourseRating />
                  <p className="text-slate-400 text-sm mb-6 flex-grow line-clamp-3">
                    Sở hữu trọn bộ 2 khóa học: Hành trình trở thành Best Seller và Bí kíp sáng tạo Content Ads Win với mức giá ưu đãi nhất.
                  </p>
                  <CourseInfo duration="4.43 giờ" lessons="50 bài học" />
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-700/50">
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-slate-500 line-through mb-1">5.736.000đ</span>
                      <span className="text-2xl font-black text-red-500">1.199.000đ</span>
                    </div>
                    <a href="#thanh-toan" className="bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-6 rounded-full transition-colors shadow-[0_0_15px_rgba(220,38,38,0.4)] hover:shadow-[0_0_20px_rgba(220,38,38,0.6)]">
                      Đăng Ký
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Course 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="bg-slate-800/40 border border-yellow-500/30 rounded-3xl overflow-hidden hover:border-yellow-500/60 transition-all duration-300 hover:-translate-y-2 group flex flex-col relative shadow-[0_0_30px_rgba(234,179,8,0.05)]"
              >
                <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider z-10 animate-pulse">
                  HOT
                </div>
                <div className="h-48 bg-gradient-to-br from-slate-700 to-slate-800 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://i.postimg.cc/tTyrjmsW/best.png')] bg-cover bg-center opacity-40 group-hover:scale-110 transition-transform duration-700"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-white mb-4 line-clamp-2 group-hover:text-yellow-400 transition-colors">
                    Hành trình trở thành Best Seller với nghề môi giới BĐS
                  </h3>
                  <CourseRating />
                  <p className="text-slate-400 text-sm mb-6 flex-grow line-clamp-3">
                    Tôi đã đúc kết kiến thức 4 năm trong nghề môi giới BĐS với 79 giao dịch...
                  </p>
                  <CourseInfo duration="3.72 giờ" lessons="39 bài học" />
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-700/50">
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-slate-500 line-through mb-1">2.868.000đ</span>
                      <span className="text-2xl font-black text-yellow-400">899.000đ</span>
                    </div>
                    <a href="#thanh-toan" className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-bold py-2 px-6 rounded-full transition-colors">
                      Đăng Ký
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Course 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                className="bg-slate-800/40 border border-slate-700 rounded-3xl overflow-hidden hover:border-yellow-500/50 transition-all duration-300 hover:-translate-y-2 group flex flex-col"
              >
                <div className="h-48 bg-gradient-to-br from-slate-700 to-slate-800 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://i.postimg.cc/wvHWpb1N/bi-quyet-sang-tao-content-ads-win.png')] bg-cover bg-center opacity-40 group-hover:scale-110 transition-transform duration-700"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-white mb-4 line-clamp-2 group-hover:text-yellow-400 transition-colors">
                    Bí kíp sáng tạo Content Ads Win - Điều quan trọng nhất khi bán BĐS
                  </h3>
                  <CourseRating />
                  <p className="text-slate-400 text-sm mb-6 flex-grow line-clamp-3">
                    Để bán được hàng - Bạn cần có khách hàng Để có khách hàng - Bạn cần chạy quảng cáo...
                  </p>
                  <CourseInfo />
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-700/50">
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-slate-500 line-through mb-1">2.868.000đ</span>
                      <span className="text-2xl font-black text-yellow-400">699.000đ</span>
                    </div>
                    <a href="#thanh-toan" className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-bold py-2 px-6 rounded-full transition-colors">
                      Đăng Ký
                    </a>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Feedback Section */}
        <section id="feedback" className="py-24 bg-[#0b1120]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle 
              subtitle="Phản hồi từ học viên" 
              title="Cảm Nhận Thực Tế Từ Những Người Đã Trải Nghiệm" 
            />
            
            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 mt-16">
              {feedbackImages.map((src, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="break-inside-avoid"
                >
                  <img 
                    src={src} 
                    alt={`Feedback ${index + 1}`} 
                    className="w-full rounded-2xl border border-slate-700/50 shadow-lg hover:border-yellow-500/50 transition-all duration-300"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Instructor Section */}
        <section className="py-24 bg-slate-950 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="relative z-10 rounded-3xl overflow-hidden border-2 border-slate-800 shadow-2xl">
                  <img 
                    src="https://i.postimg.cc/j5nWg8jz/anh_dai_dien.jpg" 
                    alt="Nguyễn Nam BĐS" 
                    className="w-full h-auto"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 hidden lg:block">
                  <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl backdrop-blur-xl">
                    <div className="flex items-center gap-4 mb-2">
                      <div className="flex -space-x-2">
                        {[1,2,3,4].map(i => (
                          <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center text-[10px] font-bold text-slate-400">
                            {i === 4 ? '+5k' : ''}
                          </div>
                        ))}
                      </div>
                      <div className="text-xs font-bold text-white">Học viên tin tưởng</div>
                    </div>
                    <div className="flex items-center gap-1">
                      {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-yellow-500 text-yellow-500" />)}
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-xs font-bold mb-6 tracking-wider uppercase">
                  <Award className="w-4 h-4" /> Người dẫn dắt thực chiến
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
                  TÔI LÀ <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">NGUYỄN NAM</span>
                </h2>
                
                <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
                  <p className="font-medium">
                    Với hơn <span className="text-white font-bold">8 năm thực chiến</span> trong thị trường Bất Động Sản, tôi đã chứng kiến hàng ngàn môi giới bỏ cuộc vì không tìm được khách hàng hoặc không biết cách làm thương hiệu.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6">
                    {[
                      { icon: <Zap className="text-yellow-400" />, text: "Founder Cộng đồng BĐS Thực Chiến" },
                      { icon: <TrendingUp className="text-yellow-400" />, text: "Chuyên gia Content Ads Win" },
                      { icon: <Users className="text-yellow-400" />, text: "Đào tạo 5000+ học viên" },
                      { icon: <ShieldCheck className="text-yellow-400" />, text: "Cố vấn Marketing cho các sàn lớn" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 bg-slate-900/50 p-4 rounded-xl border border-slate-800/50">
                        <div className="p-2 bg-slate-800 rounded-lg">{item.icon}</div>
                        <span className="text-sm font-bold text-slate-200">{item.text}</span>
                      </div>
                    ))}
                  </div>

                  <p className="italic text-slate-400 border-l-4 border-yellow-500 pl-6 py-2">
                    "Tôi không dạy bạn lý thuyết suông từ sách vở. Tôi dạy bạn những gì tôi đã làm, những sai lầm tôi đã trả giá bằng hàng tỷ đồng tiền quảng cáo để bạn có thể đi con đường ngắn nhất đến thành công."
                  </p>

                  <div className="pt-8">
                    <a 
                      href="#thanh-toan" 
                      className="inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-950 font-black rounded-2xl hover:bg-yellow-500 transition-all duration-300 group"
                    >
                      BẮT ĐẦU HỌC CÙNG TÔI <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Training Gallery */}
        <section className="py-24 bg-slate-950/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4 uppercase tracking-tight">
                HÌNH ẢNH <span className="text-yellow-500">CÁC LỚP ĐÀO TẠO</span>
              </h2>
              <div className="w-24 h-1 bg-yellow-500 mx-auto rounded-full"></div>
              <p className="text-slate-400 mt-6 max-w-2xl mx-auto text-lg">
                Những khoảnh khắc thực chiến cùng hàng ngàn học viên trên khắp cả nước, minh chứng cho chất lượng đào tạo từ Nguyễn Nam BĐS.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { url: "https://i.postimg.cc/qMFHTn2S/469378044-122106461126655133-5840358536912151765-n.jpg", alt: "Khóa học môi giới bất động sản thực chiến Nguyễn Nam" },
                { url: "https://i.postimg.cc/MKLJSR14/475202150-122114610086655133-5818946478627168752-n.jpg", alt: "Đào tạo kỹ năng chốt deal bất động sản chuyên nghiệp" },
                { url: "https://i.postimg.cc/15X12MVj/481254248-122119061714655133-2846281682958157149-n.jpg", alt: "Học viên tham gia lớp học marketing bất động sản" },
                { url: "https://i.postimg.cc/kXHPm8Wy/485944944-122121491234655133-1715954043607850533-n.jpg", alt: "Chia sẻ kinh nghiệm môi giới BĐS từ Nguyễn Nam" },
                { url: "https://i.postimg.cc/fTyQp5SP/495090103-122127469520655133-2373188469009589832-n.jpg", alt: "Lớp học xây dựng thương hiệu cá nhân cho môi giới" },
                { url: "https://i.postimg.cc/9FkHhTyp/624510721-122153103584655133-5288745364156712654-n.jpg", alt: "Cộng đồng môi giới bất động sản thực chiến Việt Nam" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    ease: [0.21, 0.47, 0.32, 0.98]
                  }}
                  className="relative overflow-hidden rounded-2xl aspect-[4/3] border border-slate-800 shadow-2xl bg-slate-900"
                >
                  <img 
                    src={item.url} 
                    alt={item.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 border-2 border-white/5 rounded-2xl pointer-events-none"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section id="ket-qua" className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              id="thanh-toan"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mt-20 scroll-mt-24"
            >
              <div className="flex flex-col items-center text-center mt-12 w-full">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">Đừng Để Đối Thủ Chốt Mất Khách Hàng Của Bạn!</h3>
                
                {/* Combined Gift and Payment Section */}
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-yellow-500/50 rounded-3xl max-w-4xl w-full mx-auto relative overflow-hidden shadow-[0_0_40px_rgba(234,179,8,0.15)] text-left">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-yellow-500/10 rounded-full blur-3xl"></div>
                  
                  {/* Gift Part */}
                  <div className="p-8 md:p-10 relative z-10">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 border-b border-slate-700/50 pb-6">
                      <div>
                        <h4 className="text-2xl md:text-3xl font-black text-white flex items-center gap-3">
                          <Gift className="w-8 h-8 text-yellow-400" />
                          QUÀ TẶNG ĐỘC QUYỀN
                        </h4>
                        <p className="text-slate-400 mt-2 font-medium">Khi đăng ký mua khoá học ngay hôm nay</p>
                      </div>
                      <div className="text-left md:text-right">
                        <div className="text-slate-500 line-through text-lg font-bold">Trị giá: 5.000.000đ</div>
                        <div className="text-3xl font-black text-yellow-400 uppercase tracking-wider animate-pulse">Miễn Phí</div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="flex items-start gap-4 bg-slate-800/50 p-4 rounded-2xl border border-slate-700/50 hover:border-yellow-500/30 transition-colors">
                        <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center shrink-0 mt-1">
                          <Calculator className="w-5 h-5 text-yellow-400" />
                        </div>
                        <div>
                          <h5 className="text-white font-bold text-lg mb-1">Bảng tính lãi suất</h5>
                          <p className="text-slate-400 text-sm">Công cụ tính toán dòng tiền chuyên nghiệp cho khách hàng</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 bg-slate-800/50 p-4 rounded-2xl border border-slate-700/50 hover:border-yellow-500/30 transition-colors">
                        <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center shrink-0 mt-1">
                          <ListChecks className="w-5 h-5 text-yellow-400" />
                        </div>
                        <div>
                          <h5 className="text-white font-bold text-lg mb-1">Checklist khai thác nhu cầu</h5>
                          <p className="text-slate-400 text-sm">Bộ câu hỏi tử huyệt giúp thấu hiểu khách hàng mục tiêu</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 bg-slate-800/50 p-4 rounded-2xl border border-slate-700/50 hover:border-yellow-500/30 transition-colors">
                        <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center shrink-0 mt-1">
                          <Users className="w-5 h-5 text-yellow-400" />
                        </div>
                        <div>
                          <h5 className="text-white font-bold text-lg mb-1">File quản lý khách hàng</h5>
                          <p className="text-slate-400 text-sm">Hệ thống CRM thu nhỏ giúp chăm sóc khách hàng hiệu quả</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 bg-slate-800/50 p-4 rounded-2xl border border-slate-700/50 hover:border-yellow-500/30 transition-colors">
                        <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center shrink-0 mt-1">
                          <FolderOpen className="w-5 h-5 text-yellow-400" />
                        </div>
                        <div>
                          <h5 className="text-white font-bold text-lg mb-1">File học dự án</h5>
                          <p className="text-slate-400 text-sm">Tài liệu phân tích dự án chuyên nghiệp, bài bản</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 border border-yellow-500/30 p-6 rounded-2xl flex flex-col md:flex-row items-start md:items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(234,179,8,0.5)]">
                        <Star className="w-6 h-6 text-slate-900 fill-current" />
                      </div>
                      <div>
                        <h5 className="text-yellow-400 font-black text-xl mb-1 uppercase tracking-wide">Đặc quyền Combo 2 Khoá Học</h5>
                        <p className="text-slate-200 text-base leading-relaxed">
                          Được đặc cách tham gia vào <span className="font-bold text-yellow-400">Nhóm Nội Bộ Kín</span>, hỏi đáp trực tiếp cùng chuyên gia Nguyễn Nam BĐS.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Payment Part */}
                  <div className="bg-slate-900/40 border-t border-slate-700/50 p-6 md:p-8 relative z-10">
                    <h4 className="text-lg font-bold text-yellow-400 mb-6 uppercase tracking-wider flex items-center justify-center gap-2">
                      <DollarSign className="w-5 h-5" /> Thông Tin Chuyển Khoản
                    </h4>
                    
                    <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
                      {/* QR Code */}
                      <div className="w-full md:w-1/4 flex flex-col items-center">
                        <div className="bg-white p-2 rounded-lg shadow-lg">
                          <img 
                            src="https://i.postimg.cc/mrjqpsDW/qr-khoa-hoc.png" 
                            alt="QR Code Chuyển Khoản" 
                            className="w-full max-w-[140px] h-auto rounded"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <p className="mt-2 text-[10px] text-slate-500 uppercase font-bold tracking-tighter">Quét mã để thanh toán</p>
                      </div>
                      
                      {/* Bank Details */}
                      <div className="w-full md:w-3/4 space-y-2 text-left bg-slate-950/50 p-4 rounded-xl border border-slate-800">
                        <div className="flex justify-between items-center py-1.5 border-b border-slate-800">
                          <span className="text-xs text-slate-500">Ngân hàng:</span>
                          <span className="text-white font-bold text-sm">VP Bank</span>
                        </div>
                        <div className="flex justify-between items-center py-1.5 border-b border-slate-800">
                          <span className="text-xs text-slate-500">Số tài khoản:</span>
                          <span className="text-yellow-400 font-black text-xl tracking-wider">928231666</span>
                        </div>
                        <div className="flex justify-between items-center py-1.5 border-b border-slate-800">
                          <span className="text-xs text-slate-500">Chủ tài khoản:</span>
                          <span className="text-white font-bold text-sm uppercase">NGUYEN VAN NAM</span>
                        </div>
                        <div className="flex justify-between items-center py-1.5">
                          <span className="text-xs text-slate-500">Nội dung:</span>
                          <span className="text-green-400 font-bold text-sm bg-green-400/5 px-2 py-0.5 rounded border border-green-400/10">HOC + SĐT + TÊN CỦA BẠN</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 space-y-4">
                      <div>
                        <label className="block text-slate-400 text-[10px] font-black uppercase tracking-widest mb-2 ml-1">Chọn khoá học bạn đăng ký:</label>
                        <div className="relative group">
                          <select className="w-full bg-slate-950/80 border-2 border-slate-800 text-white rounded-2xl px-5 py-4 focus:outline-none focus:border-yellow-500 transition-all appearance-none cursor-pointer font-bold text-sm md:text-base shadow-inner">
                            <option value="combo">1.199k - COMBO 2 KHÓA DÀNH CHO BEST SELLER</option>
                            <option value="bestseller">899k - Hành trình trở thành Best Seller BĐS</option>
                            <option value="content">699k - Bí kíp sáng tạo Content Ads Win</option>
                          </select>
                          <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500 group-hover:text-yellow-500 transition-colors">
                            <ChevronDown className="w-5 h-5" />
                          </div>
                        </div>
                      </div>

                      <div className="pt-2">
                        <a 
                          href="https://zalo.me/0372549893" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="group relative inline-flex items-center justify-center px-6 py-4 md:py-5 font-black text-slate-900 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl overflow-hidden transition-all hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(234,179,8,0.4)] w-full"
                        >
                        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-full group-hover:h-56 opacity-20"></span>
                        <span className="relative flex items-center gap-2 text-base uppercase tracking-wide">
                          Tôi Đã Chuyển Khoản <CheckCircle2 className="w-5 h-5" />
                        </span>
                      </a>
                    </div>
                  </div>
                    
                    <p className="mt-4 text-[11px] text-slate-500 flex items-center justify-center gap-2 italic">
                      <ShieldCheck className="w-3.5 h-3.5 text-green-500/50" /> Hệ thống tự động kích hoạt tài khoản trong 5 phút.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
      
      {/* Footer */}
      <footer className="bg-[#0b1120] py-16 border-t border-slate-800">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <div className="text-2xl font-black tracking-tighter flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-yellow-500 rounded flex items-center justify-center text-slate-900">N</div>
                <span className="text-white">NGUYỄN NAM <span className="text-yellow-500">BĐS</span></span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-md">
                Hệ thống đào tạo thực chiến số 1 Việt Nam. Chúng tôi cam kết mang lại giá trị thực tế và kết quả đo lường được cho từng học viên thông qua các chương trình huấn luyện chuyên sâu.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-red-600 transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-white mb-6">Liên Hệ</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-slate-400">
                  <MapPin className="w-5 h-5 text-yellow-500 shrink-0" />
                  <span className="text-sm">Hà Nội, Việt Nam</span>
                </li>
                <li className="flex items-center gap-3 text-slate-400">
                  <Phone className="w-5 h-5 text-yellow-500 shrink-0" />
                  <span className="text-sm">Hotline: Đang cập nhật</span>
                </li>
                <li className="flex items-center gap-3 text-slate-400">
                  <Mail className="w-5 h-5 text-yellow-500 shrink-0" />
                  <span className="text-sm">contact@nambds.vn</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-white mb-6">Liên Kết</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-slate-400 hover:text-yellow-400 transition-colors text-sm">Trang chủ</a></li>
                <li><a href="#khoa-hoc" className="text-slate-400 hover:text-yellow-400 transition-colors text-sm">Khoá học</a></li>
                <li><a href="#blog" className="text-slate-400 hover:text-yellow-400 transition-colors text-sm">Blog</a></li>
                <li><a href="#" className="text-slate-400 hover:text-yellow-400 transition-colors text-sm">Kích hoạt khoá học</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-slate-500 text-sm">
              © Nguyễn Nam BĐS - Vận hành bởi Edubit
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-slate-500 hover:text-slate-300">Điều khoản sử dụng</a>
              <a href="#" className="text-slate-500 hover:text-slate-300">Chính sách bảo mật</a>
            </div>
          </div>
        </motion.div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 left-0 right-0 z-50 px-4 pointer-events-none">
        <div className="max-w-7xl mx-auto flex justify-center items-center gap-4">
          <motion.a 
            href="https://zalo.me/0372549893"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="pointer-events-auto flex items-center gap-2 bg-[#0068ff] hover:bg-[#0056d2] text-white px-6 py-3.5 rounded-full font-black shadow-lg shadow-blue-600/30 transition-all hover:scale-105 uppercase tracking-wide text-xs md:text-sm"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Nhắn tin</span>
          </motion.a>
          
          <motion.a 
            href="#thanh-toan"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="pointer-events-auto flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-300 hover:to-yellow-400 text-slate-900 px-6 py-3.5 rounded-full font-black shadow-lg shadow-yellow-500/30 transition-all hover:scale-105 uppercase tracking-wide text-xs md:text-sm"
          >
            <span>Mua khoá học</span>
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </div>
      </div>
      <Analytics />
    </div>
  );
}
