import styles from './About.module.scss';
import Image from 'next/image';

export default function About() {
    return (
        <div className={styles.about}>
            <section className={styles.hero}>
                <h1>О нашей компании</h1>
                <p className={styles.subtitle}>Создаем будущее веб-технологий</p>
            </section>

            <section className={styles.mission}>
                <h2>Наша миссия</h2>
                <p>Мы стремимся создавать инновационные веб-решения, которые помогают бизнесу расти и развиваться в цифровую эпоху.</p>
            </section>

            <section className={styles.team}>
                <h2>Наша команда</h2>
                <div className={styles.teamGrid}>
                    <div className={styles.teamMember}>
                        <div className={styles.avatar}>
                            <Image
                                src="/team/member1.jpg"
                                alt="Команда"
                                width={200}
                                height={200}
                                className={styles.avatarImage}
                            />
                        </div>
                        <h3>Александр Петров</h3>
                        <p>Ведущий разработчик</p>
                    </div>
                    <div className={styles.teamMember}>
                        <div className={styles.avatar}>
                            <Image
                                src="/team/member2.jpg"
                                alt="Команда"
                                width={200}
                                height={200}
                                className={styles.avatarImage}
                            />
                        </div>
                        <h3>Мария Иванова</h3>
                        <p>UI/UX дизайнер</p>
                    </div>
                    <div className={styles.teamMember}>
                        <div className={styles.avatar}>
                            <Image
                                src="/team/member3.jpg"
                                alt="Команда"
                                width={200}
                                height={200}
                                className={styles.avatarImage}
                            />
                        </div>
                        <h3>Дмитрий Сидоров</h3>
                        <p>Технический директор</p>
                    </div>
                </div>
            </section>

            <section className={styles.values}>
                <h2>Наши ценности</h2>
                <div className={styles.valuesGrid}>
                    <div className={styles.valueCard}>
                        <h3>Инновации</h3>
                        <p>Постоянно исследуем и внедряем новые технологии</p>
                    </div>
                    <div className={styles.valueCard}>
                        <h3>Качество</h3>
                        <p>Стремимся к совершенству в каждом проекте</p>
                    </div>
                    <div className={styles.valueCard}>
                        <h3>Надежность</h3>
                        <p>Гарантируем стабильную работу наших решений</p>
                    </div>
                </div>
            </section>

            <section className={styles.achievements}>
                <h2>Наши достижения</h2>
                <div className={styles.stats}>
                    <div className={styles.stat}>
                        <h3>100+</h3>
                        <p>Успешных проектов</p>
                    </div>
                    <div className={styles.stat}>
                        <h3>50+</h3>
                        <p>Довольных клиентов</p>
                    </div>
                    <div className={styles.stat}>
                        <h3>5+</h3>
                        <p>Лет опыта</p>
                    </div>
                </div>
            </section>
        </div>
    );
} 