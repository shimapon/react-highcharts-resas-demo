import React from "react";

type Props = {
  prefectures:
    | {
        prefCode: number;
        prefName: string;
      }[];

  onChange: (name: string, prefName: number, check: boolean) => void;
};

const Styles: { [key: string]: React.CSSProperties } = {
  checkcardList: {
    display: "flex",
    flexWrap: "wrap",
    padding: "10px",
    justifyContent: "flex-start",
    justifySelf: "auto",
  },
  text: { display: "contents", marginLeft: "1em", cursor: "pointer" },
  checkcard: {
    borderRadius: "24px",
    border: "solid 2px",
    textAlign: "center",
    padding: "4px",
    margin: "0.5rem",
  },
};

// 都道府県一覧のチェックボックスを表示するコンポーネント
const CheckField: React.FC<Props> = ({ prefectures, onChange }) => {
  return (
    <>
      <div style={Styles.checkcardList}>
        {prefectures.map((prefecture) => (
          <div style={Styles.checkcard} key={prefecture.prefName}>
            <input
              type="checkbox"
              name="Prefecture name"
              onChange={(event) =>
                onChange(
                  prefecture.prefName,
                  prefecture.prefCode,
                  event.target.checked
                )
              }
              id={"checkbox" + prefecture.prefCode}
            />
            <label
              style={Styles.text}
              htmlFor={"checkbox" + prefecture.prefCode}
            >
              {prefecture.prefName.length === 3
                ? "　" + prefecture.prefName
                : prefecture.prefName}
            </label>
          </div>
        ))}
      </div>
    </>
  );
};

export default CheckField;
