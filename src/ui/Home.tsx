import React from 'react'
import { Button } from '../components/Button'
import { Section } from '../components/Section'
import { Icon } from '../components/Icon'
import styles from './Home.module.css'

export function Home() {
  return (
    <div className={styles.banner}>
      <Section>
        <h2>
          Welcome to Baby Solana Flip!
        </h2>
        <p style={{ wordWrap: 'break-word' }}>
          An open source, decentralized casino built on Gamba. All Royalties generated from bets go toward Baby Solana Liquidity burns.
        </p>
        <div style={{ display: 'flex', gap: '10px' }}>
          <Button
            as="a"
            color="white"
            href="https://gamba.so"
            target="_blank"
            icon={<Icon.ExternalLink />}
          >
            Learn more
          </Button>
        </div>
      </Section>
    </div>
  )
}
