'use client';

import { motion } from 'framer-motion';
import { FiCode, FiUsers, FiCpu, FiGlobe, FiGithub, FiArrowRight } from 'react-icons/fi';
import NeonButton from './components/NeonButton';
import InfoCard from './components/InfoCard';
import Link from 'next/link';
import Logo from './components/Logo';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* 히어로 섹션 */}
      <section className="py-20 md:py-32 px-4 md:px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Logo className="mb-6 scale-150" />

            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-primary">코드</span>로 세상을 
              <span className="text-primary"> 바꾸는</span> 여정
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-foreground/80 max-w-3xl mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Informatica는 컴퓨터 과학과 프로그래밍에 열정을 가진 학생들의 커뮤니티입니다. 
              함께 배우고, 만들고, 혁신하며 디지털 미래를 이끌어갑니다.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <NeonButton href="/join" size="lg">
                지금 가입하기
              </NeonButton>
              <NeonButton href="/projects" variant="secondary" size="lg">
                프로젝트 살펴보기
              </NeonButton>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 주요 특징 섹션 */}
      <section className="py-20 px-4 md:px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Informatica <span className="text-primary">동아리</span>의 특징
            </h2>
            <p className="text-foreground/80 max-w-2xl mx-auto">
              다양한 활동과 프로젝트를 통해 프로그래밍 실력을 향상시키고 실제 문제를 해결하는 경험을 쌓을 수 있습니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <InfoCard 
              title="코딩 워크샵" 
              icon={<FiCode />}
              delay={0.1}
            >
              초보자부터 전문가까지 모든 수준에 맞는 정기적인 코딩 워크샵을 진행합니다. 
              최신 기술과 도구를 배우고 실습합니다.
            </InfoCard>
            
            <InfoCard 
              title="프로젝트 협업" 
              icon={<FiUsers />}
              delay={0.2}
            >
              팀을 이루어 실제 프로젝트를 개발하고, 협업 능력과 문제 해결 능력을 기릅니다. 
              모든 프로젝트는 포트폴리오에 추가할 수 있습니다.
            </InfoCard>
            
            <InfoCard 
              title="최신 기술 탐구" 
              icon={<FiCpu />}
              delay={0.3}
            >
              AI, 머신러닝, 웹 개발, 모바일 앱 개발 등 다양한 기술 분야를 탐구하고 
              실제 프로젝트에 적용합니다.
            </InfoCard>
            
            <InfoCard 
              title="네트워킹 기회" 
              icon={<FiGlobe />}
              delay={0.4}
            >
              업계 전문가와의 만남, 해커톤 참여, 기술 컨퍼런스 참석 등 다양한 
              네트워킹 기회를 제공합니다.
            </InfoCard>
          </div>
        </div>
      </section>

      {/* 최근 프로젝트 섹션 */}
      <section className="py-20 px-4 md:px-6 bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              최근 <span className="text-primary">프로젝트</span>
            </h2>
            <p className="text-foreground/80 max-w-2xl mx-auto">
              Informatica 동아리 회원들이 협업하여 개발한 최근 프로젝트들을 확인해보세요.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[1, 2, 3].map((project) => (
              <motion.div
                key={project}
                className="bg-black/50 border border-primary/30 rounded-lg overflow-hidden hover:shadow-[0_0_15px_rgba(0,191,255,0.3)] transition-shadow duration-300"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="h-48 bg-gradient-to-br from-primary/20 to-blue-900/20 flex items-center justify-center">
                  <FiGithub className="text-5xl text-primary/70" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">프로젝트 {project}</h3>
                  <p className="text-foreground/80 mb-4">
                    이 프로젝트는 동아리 회원들이 협업하여 개발한 웹 애플리케이션입니다.
                  </p>
                  <Link href="/projects" className="text-primary inline-flex items-center hover:underline">
                    자세히 보기 <FiArrowRight className="ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <NeonButton href="/projects" variant="secondary">
              모든 프로젝트 보기
            </NeonButton>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="py-20 px-4 md:px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="relative overflow-hidden bg-gradient-to-r from-black to-black/90 rounded-2xl p-10 md:p-16 border border-primary/30">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            <div className="relative z-10">
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  지금 <span className="text-primary">Informatica</span>와 함께하세요
                </h2>
                <p className="text-foreground/80 mb-8">
                  코딩에 대한 열정을 가진 동료들을 만나고, 실무 경험을 쌓으며, 
                  미래의 커리어를 위한 준비를 시작하세요.
                </p>
                <NeonButton href="/join" size="lg">
                  가입 신청하기
                </NeonButton>
              </div>
            </div>
            
            {/* 장식용 원 */}
            <motion.div
              className="absolute -right-20 -top-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
              animate={{
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            <motion.div
              className="absolute -left-20 -bottom-20 w-80 h-80 bg-blue-900/10 rounded-full blur-3xl"
              animate={{
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}