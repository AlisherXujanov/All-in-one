import styles from '../styles/Home.module.scss';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <Image
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072"
            alt="Фоновое изображение"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>
            Добро пожаловать в наше современное приложение
          </h1>
          <p className={styles.description}>
            Мы создаем инновационные решения для вашего бизнеса
          </p>
          <div className={styles.ctaButtons}>
            <Link href="/about" className={styles.primaryButton}>
              Узнать больше
            </Link>
            <Link href="/contact" className={styles.secondaryButton}>
              Связаться с нами
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.features}>
        <h2>Наши преимущества</h2>
        <div className={styles.featureGrid}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <Image
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070"
                alt="Современные технологии"
                width={200}
                height={200}
                style={{ objectFit: 'cover', borderRadius: '10px' }}
              />
            </div>
            <h3>Современные технологии</h3>
            <p>Используем последние достижения в области веб-разработки</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070"
                alt="Быстрая работа"
                width={200}
                height={200}
                style={{ objectFit: 'cover', borderRadius: '10px' }}
              />
            </div>
            <h3>Быстрая работа</h3>
            <p>Оптимизированная производительность для лучшего пользовательского опыта</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <Image
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070"
                alt="Безопасность"
                width={200}
                height={200}
                style={{ objectFit: 'cover', borderRadius: '10px' }}
              />
            </div>
            <h3>Безопасность</h3>
            <p>Надежная защита данных и конфиденциальность</p>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.ctaBackground}>
          <Image
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070"
            alt="Фоновое изображение CTA"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className={styles.ctaContent}>
          <h2>Готовы начать?</h2>
          <p>Присоединяйтесь к нам сегодня и откройте новые возможности</p>
          <Link href="/contact" className={styles.primaryButton}>
            Начать сейчас
          </Link>
        </div>
      </section>
    </main>
  );
} 