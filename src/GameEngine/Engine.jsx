import { useState, useEffect } from "react";
import LifeStage from "./LifeStage";
import "./Engine.css";
import LoadingAnimation from "../LoadingAnimation";
import choices from "./choices"; // Adjust the path based on where you placed choices.js

function Engine() {
  const [animating, setAnimating] = useState(false);
  const [currentDecision, setCurrentDecision] = useState(null);
  const [age, setAge] = useState(1);
  const [health, setHealth] = useState(100);
  const [money, setMoney] = useState(1);
  const [love, setLove] = useState(0);
  const [happiness, setHappiness] = useState(0);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (loading) {
      const interval = setInterval(
        () => {
          setAge((a) => {
            if (a > 100 || health <= 0) {
              clearInterval(interval);
              return a;
            }
            return a + 1;
          });
          setHealth((h) => {
            if (age >= 18) {
              h -= 5; // Aging health decrease
            }
            return h;
          });
        },
        age < 18 ? 300 : 2000
      );

      return () => clearInterval(interval);
    }
  }, [loading, age, money]);

  useEffect(() => {
    const availableChoices = filterChoices();
    if (availableChoices.length > 0 || age > 100 || health <= 0) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [age, health]);

  const filterChoices = () => {
    return choices
      .filter(
        (choice) =>
          age >= choice.ageRange.min &&
          age <= choice.ageRange.max &&
          !history.includes(choice.text)
      )
      .sort(() => Math.random() - 0.5)
      .slice(0, 2);
  };

  const handleDecision = (choice) => {
    setCurrentDecision(choice);
    setAnimating(true);
    setTimeout(
      () => {
        let newMoney = money + choice.immediateEffects.money;
        if (newMoney < 0) {
          newMoney = 0;
        }
        setHealth(
          (h) => h + choice.immediateEffects.health - (age >= 18 ? 5 : 0)
        );
        setMoney(newMoney);
        setLove(love + choice.immediateEffects.love);
        setHappiness(happiness + choice.immediateEffects.happiness);
        setHistory([...history, choice.text]);
        setAge(age + 1);
        setAnimating(false);
      },
      age < 18 ? 300 : 2000
    );
  };

  if (money == 0 && health > 0) {
    setHealth(0);
    alert("Paranız bitti! Yapı kredi organlarınızı hacize geliyor..");
  }

  if (age > 100) {
    return <div className="game-over">Oyun bitti! 100 yaşına ulaştın!</div>;
  } else if (age > 77 && health <= 0) {
    if (happiness >= 50 && love >= 50) {
      return (
        <div className="game-over">
          Tebrikler! Uzun ve mutlu bir ömür yaşadın!
        </div>
      );
    }
    if (happiness < 50 && love >= 50) {
      return (
        <div className="game-over">
          Tebrikler! Uzun ve sevgi dolu bir ömür yaşadın!
        </div>
      );
    }
    if (happiness >= 50 && love < 50) {
      return (
        <div className="game-over">
          Tebrikler! Uzun ve mutlu bir ömür yaşadın!
        </div>
      );
    }
    if (happiness < 50 && love < 50) {
      return (
        <div className="game-over">
          Uzun ama kötü bir ömür yaşadın gibi görünüyor. Uzun yaşamak marifet
          değil. Daha iyi kararlar vermek için yeniden başla.
        </div>
      );
    }
  } else if (health <= 0) {
    if (happiness >= 50 && love >= 50) {
      return (
        <div className="game-over">
          Tebrikler! Kısa ama mutlu ve sevgi dolu bir ömür yaşadın! Gelecek
          sefer para hesabını daha iyi yapmayı dene.
        </div>
      );
    }
    if (happiness < 50 && love >= 50) {
      return (
        <div className="game-over">
          Tebrikler! Kısa ama sevgi dolu bir ömür yaşadın! Gelecek sefer para
          hesabını daha iyi yapmayı dene.
        </div>
      );
    }
    if (happiness >= 50 && love < 50) {
      return (
        <div className="game-over">
          Tebrikler! Kısa ama mutlu bir ömür yaşadın! Gelecek sefer para
          hesabını daha iyi yapmayı dene.
        </div>
      );
    }
    if (happiness < 50 && love < 50) {
      return (
        <div className="game-over">
          Kısa ve kötü bir ömür yaşadın, daha iyi kararlar vermek için yeniden
          başla. Gelecek sefer para hesabını daha iyi yapmayı dene.
        </div>
      );
    }
  }

  return (
    <>
      <LoadingAnimation />
      <div className="game-page">
        <div className="game-container">
          <header>
            <h1>Davşan Hayantı</h1>
            <div className="stats">
              <p>Yaş: {age}</p>
              <p>Sağlık: {health}🩺</p>
              <p>Para: {money}💸</p>
              <p>Aşk: {love} 💌</p>
              <p>Mutluluk: {happiness}🙂</p>
            </div>
          </header>
          <section>
            {animating ? (
              <div className="loading">Zaman geşiyor...</div>
            ) : (
              <LifeStage
                choices={filterChoices()}
                onDecision={handleDecision}
              />
            )}
          </section>
        </div>
      </div>
    </>
  );
}

export default Engine;
