import React, { useState } from "react";
import moment from "moment";
import Link from "next/link";
import styles from "../../styles/News.module.css";
import { useAppSelector } from "../../hooks/useAppSelector";
import useAction from "../../hooks/useAction";
import { NewsInfo } from "../../types/NewsTypes";
import Image from "next/image";

const News: React.FC = () => {
  const [search, SetSearch] = useState<string>("");
  const { fetchNewsAction } = useAction();
  const NowDate = moment().format("YYYY-MM-DD");
  const API_KEY_NEWS = "9a70ff2ed7514288b7ce8289b9bed5e0";
  const { news, loading } = useAppSelector((state) => state.getnews);

  async function addNew() {
    if (search === "") {
      return <div>Введите запрос</div>;
    }
    fetchNewsAction(API_KEY_NEWS, search, NowDate);
  }
  const onKeyDownPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addNew();
      console.log(news);
    }
  };

  return (
    <div className={styles.news}>
      <input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          SetSearch(e.target.value)
        }
        placeholder="Новости"
        value={search}
        onKeyPress={onKeyDownPress}
        className={styles.inpnews}
      />
      <button className={styles.btnnews} onClick={addNew} type="button">
        Поиск
      </button>
      {loading ? (
        <div className={styles.container}>
          <Image
            src="/loading-5.gif"
            width={320}
            height={240}
            className={styles.loading}
            alt="load"
          />
        </div>
      ) : (
        <div className={styles.container}>
          {news.map(({ title, urlToImage, id }: NewsInfo, idx: number) =>
            urlToImage === null ? null : (
              <div key={id}>
                <Link href={`/News/${idx}`}>
                  <a className={styles.link}>
                    <div className={styles.item}>
                      <img
                        src={urlToImage}
                        alt="img"
                        className={styles.photo}
                      />
                      <div>
                        <div>{title}</div>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
};
export default News;
