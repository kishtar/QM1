import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { getWeeklyReward, WeeklyReward } from "../lib/propability"
import { GetStaticProps } from "next";
import { FunctionComponent, useState } from "react";

interface Props {
  levelRewards: WeeklyReward[];
}

const Home: FunctionComponent<Props> = ({ levelRewards }) => {
  const [level, setLevel] = useState(1);
  const rewards = levelRewards[level - 1];

  return (
    <div>
      <input type="range" min="1" max="13" value={level} onChange={e => setLevel(e.target.valueAsNumber)} />
      <input type="number" min="1" max="13" value={level} onChange={e => setLevel(e.target.valueAsNumber)} />
      <p>champion: {rewards.champion}</p>
      <p>wildcard: {rewards.champion_wildcard}</p>
      <p>token: {rewards.champion}</p>
      <p>common: {rewards.expected_rewards.common}</p>
      <p>rare: {rewards.expected_rewards.rare}</p>
      <p>epic: {rewards.expected_rewards.epic}</p>
      <p>legendary: {rewards.expected_rewards.legendary}</p>
      <p>shards: {rewards.shards}</p>
    </div>
  )
}

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const levels = Array(13).fill(0).map((_, i) => i + 1);
  return {
    props: {
      levelRewards: levels.map(getWeeklyReward)
    }
  }
}