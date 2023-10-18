import styles from './page.module.css'
import Bookmark from '@/components/bookmark/Bookmark'
import Features from '@/components/features/Features'
import Download from '@/components/download/Download'
import FAQ from '@/components/faq/FAQ'

export default function Home() {
  return (
    <main className={styles.main}>
      <Bookmark />
      <Features />
      <Download />
      <FAQ />
    </main>
  )
}
