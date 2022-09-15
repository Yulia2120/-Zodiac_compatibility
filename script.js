function compatibility() {
  let woomen = prompt("Введите свой зодиака:");
  let men = prompt("Введите знак зодиака партнера:");

  if (woomen.toLowerCase() == "овен" && men.toLowerCase() == "овен")
    alert(
      `Совместимость в любви: 90% 
       Совместимость в браке: 40% 
       Тип отношений: Война за мир`
    );
  else if (
    (woomen.toLowerCase() == "овен" && men.toLowerCase() == "телец") ||
    (woomen.toLowerCase() == "телец" && men.toLowerCase() == "овен")
  )
    alert(
      `Совместимость в любви: 80% 
       Совместимость в браке: 80%  
       Тип отношений: Разница в темпе`
    );
  else if (
    (woomen.toLowerCase() == "овен" && men.toLowerCase() == "близнецы") ||
    (woomen.toLowerCase() == "близнецы" && men.toLowerCase() == "овен")
  )
    alert(
      `Совместимость в любви: 70% 
       Совместимость в браке: 30%  
       Тип отношений: Боевая готовность`
    );
  else if (
    (woomen.toLowerCase() == "овен" && men.toLowerCase() == "рак") ||
    (woomen.toLowerCase() == "рак" && men.toLowerCase() == "овен")
  )
    alert(
      `Совместимость в любви: 80% 
       Совместимость в браке: 70%  
       Тип отношений: Шерше ля фам`
    );
  else if (
    (woomen.toLowerCase() == "овен" && men.toLowerCase() == "лев") ||
    (woomen.toLowerCase() == "лев" && men.toLowerCase() == "овен")
  )
    alert(
      `Совместимость в любви: 100% 
       Совместимость в браке: 90%  
       Тип отношений: Дотянуться до небес`
    );
  else if (
    (woomen.toLowerCase() == "овен" && men.toLowerCase() == "дева") ||
    (woomen.toLowerCase() == "дева" && men.toLowerCase() == "овен")
  )
    alert(
      `Совместимость в любви: 80% 
       Совместимость в браке: 90%  
       Тип отношений: Равнение на лидера`
    );
  else if (
    (woomen.toLowerCase() == "овен" && men.toLowerCase() == "весы") ||
    (woomen.toLowerCase() == "весы" && men.toLowerCase() == "овен")
  )
    alert(
      `Совместимость в любви: 80% 
       Совместимость в браке: 70%  
       Тип отношений: Крутые виражи`
    );
  else if (
    (woomen.toLowerCase() == "овен" && men.toLowerCase() == "скорпион") ||
    (woomen.toLowerCase() == "скорпион" && men.toLowerCase() == "овен")
  )
    alert(
      `Совместимость в любви: 100% 
       Совместимость в браке: 90%  
       Тип отношений: Сила страсти`
    );
  else if (
    (woomen.toLowerCase() == "овен" && men.toLowerCase() == "стрелец") ||
    (woomen.toLowerCase() == "стрелец" && men.toLowerCase() == "овен")
  )
    alert(
      `Совместимость в любви: 90% 
       Совместимость в браке: 50%  
       Тип отношений: Противники или союзники?`
    );
  else if (
    (woomen.toLowerCase() == "овен" && men.toLowerCase() == "козерог") ||
    (woomen.toLowerCase() == "козерог" && men.toLowerCase() == "овен")
  )
    alert(
      `Совместимость в любви: 80% 
       Совместимость в браке: 90%  
       Тип отношений: Кто впереди?`
    );
  else if (
    (woomen.toLowerCase() == "овен" && men.toLowerCase() == "водолей") ||
    (woomen.toLowerCase() == "водолей" && men.toLowerCase() == "овен")
  )
    alert(
      `Совместимость в любви: 80% 
       Совместимость в браке: 60%  
       Тип отношений: Бури на солнце`
    );
  else if (
    (woomen.toLowerCase() == "овен" && men.toLowerCase() == "рыбы") ||
    (woomen.toLowerCase() == "рыбы" && men.toLowerCase() == "овен")
  )
    alert(
      `Совместимость в любви: 90% 
       Совместимость в браке: 80%  
       Тип отношений: В поисках равновесия`
    );
  else if (woomen.toLowerCase() == "телец" && men.toLowerCase() == "телец")
    alert(
      `Совместимость в любви: 100% 
       Совместимость в браке: 100%  
       Тип отношений: Двойное упорство`
    );
  else if (
    (woomen.toLowerCase() == "телец" && men.toLowerCase() == "близнецы") ||
    (woomen.toLowerCase() == "близнецы" && men.toLowerCase() == "телец")
  )
    alert(
      `Совместимость в любви: 70% 
      Совместимость в браке: 40%  
      Тип отношений: Вместе, но порознь`
    );
  else if (
    (woomen.toLowerCase() == "телец" && men.toLowerCase() == "рак") ||
    (woomen.toLowerCase() == "рак" && men.toLowerCase() == "телец")
  )
    alert(
      `Совместимость в любви: 80% 
      Совместимость в браке: 100%  
      Тип отношений: Похожий взгляд на вещи`
    );
  else if (
    (woomen.toLowerCase() == "телец" && men.toLowerCase() == "лев") ||
    (woomen.toLowerCase() == "лев" && men.toLowerCase() == "телец")
  )
    alert(
      `Совместимость в любви: 100% 
      Совместимость в браке: 100%  
      Тип отношений: Страсть и нежность`
    );
  else if (
    (woomen.toLowerCase() == "телец" && men.toLowerCase() == "дева") ||
    (woomen.toLowerCase() == "дева" && men.toLowerCase() == "телец")
  )
    alert(
      `Совместимость в любви: 90% 
        Совместимость в браке: 100%  
        Тип отношений: Душа в душу`
    );
  else if (
    (woomen.toLowerCase() == "телец" && men.toLowerCase() == "весы") ||
    (woomen.toLowerCase() == "весы" && men.toLowerCase() == "телец")
  )
    alert(
      `Совместимость в любви: 90% 
          Совместимость в браке: 90%  
          Тип отношений: Родственные души`
    );
  else if (
    (woomen.toLowerCase() == "телец" && men.toLowerCase() == "скорпион") ||
    (woomen.toLowerCase() == "скорпион" && men.toLowerCase() == "телец")
  )
    alert(
      `Совместимость в любви: 100% 
         Совместимость в браке: 100%  
         Тип отношений: Иголка и нитка`
    );
  else if (
    (woomen.toLowerCase() == "телец" && men.toLowerCase() == "стрелец") ||
    (woomen.toLowerCase() == "стрелец" && men.toLowerCase() == "телец")
  )
    alert(
      `Совместимость в любви: 90% 
        Совместимость в браке: 80%  
        Тип отношений: Гармония противоположностей`
    );
  else if (
    (woomen.toLowerCase() == "телец" && men.toLowerCase() == "козерог") ||
    (woomen.toLowerCase() == "козерог" && men.toLowerCase() == "телец")
  )
    alert(
      `Совместимость в любви: 100% 
        Совместимость в браке: 100%  
        Тип отношений: Как за каменной стеной`
    );
  else if (
    (woomen.toLowerCase() == "телец" && men.toLowerCase() == "водолей") ||
    (woomen.toLowerCase() == "водолей" && men.toLowerCase() == "телец")
  )
    alert(
      `Совместимость в любви: 80% 
      Совместимость в браке: 70%  
      Тип отношений: И в горе, и в радости`
    );
  else if (
    (woomen.toLowerCase() == "телец" && men.toLowerCase() == "рыбы") ||
    (woomen.toLowerCase() == "рыбы" && men.toLowerCase() == "телец")
  )
    alert(
      `Совместимость в любви: 90% 
      Совместимость в браке: 100%  
      Тип отношений: Пример для подражания`
    );
  else if (
    woomen.toLowerCase() == "близнецы" &&
    men.toLowerCase() == "близнецы"
  )
    alert(
      `Совместимость в любви: 80% 
      Совместимость в браке: 30%  
      Тип отношений: Свобода выхода за рамки`
    );
  else if (
    (woomen.toLowerCase() == "близнецы" && men.toLowerCase() == "лев") ||
    (woomen.toLowerCase() == "лев" && men.toLowerCase() == "близнецы")
  )
    alert(
      `Совместимость в любви: 80% 
      Совместимость в браке: 50%  
      Тип отношений: Погоня за идеалом`
    );
  else if (
    (woomen.toLowerCase() == "близнецы" && men.toLowerCase() == "дева") ||
    (woomen.toLowerCase() == "дева" && men.toLowerCase() == "близнецы")
  )
    alert(
      `Совместимость в любви: 80% 
      Совместимость в браке: 40%  
      Тип отношений: Ветер перемен`
    );
  else if (
    (woomen.toLowerCase() == "близнецы" && men.toLowerCase() == "весы") ||
    (woomen.toLowerCase() == "весы" && men.toLowerCase() == "близнецы")
  )
    alert(
      `Совместимость в любви: 90% 
        Совместимость в браке: 50%  
        Тип отношений: Искусство понимать`
    );
  else if (
    (woomen.toLowerCase() == "близнецы" && men.toLowerCase() == "скорпион") ||
    (woomen.toLowerCase() == "скорпион" && men.toLowerCase() == "близнецы")
  )
    alert(
      `Совместимость в любви: 90% 
        Совместимость в браке: 40%  
        Тип отношений: Страсть и ревность`
    );
  else if (
    (woomen.toLowerCase() == "близнецы" && men.toLowerCase() == "стрелец") ||
    (woomen.toLowerCase() == "стрелец" && men.toLowerCase() == "близнецы")
  )
    alert(
      `Совместимость в любви: 100% 
      Совместимость в браке: 70%  
      Тип отношений: Никаких обязательств`
    );
  else if (
    (woomen.toLowerCase() == "близнецы" && men.toLowerCase() == "козерог") ||
    (woomen.toLowerCase() == "козерог" && men.toLowerCase() == "близнецы")
  )
    alert(
      `Совместимость в любви: 80% 
      Совместимость в браке: 40%  
      Тип отношений: Разум или сердце?`
    );
  else if (
    (woomen.toLowerCase() == "близнецы" && men.toLowerCase() == "водолей") ||
    (woomen.toLowerCase() == "водолей" && men.toLowerCase() == "близнецы")
  )
    alert(
      `Совместимость в любви: 90% 
      Совместимость в браке: 50%  
      Тип отношений: Нет времени скучать`
    );
  else if (
    (woomen.toLowerCase() == "близнецы" && men.toLowerCase() == "рыбы") ||
    (woomen.toLowerCase() == "рыбы" && men.toLowerCase() == "близнецы")
  )
    alert(
      `Совместимость в любви: 80% 
      Совместимость в браке: 40%  
      Тип отношений: Сто тайн друг от друга`
    );
  else if (woomen.toLowerCase() == "рак" && men.toLowerCase() == "рак")
    alert(
      `Совместимость в любви: 80% 
      Совместимость в браке: 100%  
      Тип отношений: Единомышленники и союзники`
    );
  else if (
    (woomen.toLowerCase() == "рак" && men.toLowerCase() == "лев") ||
    (woomen.toLowerCase() == "лев" && men.toLowerCase() == "рак")
  )
    alert(
      `Совместимость в любви: 80% 
      Совместимость в браке: 100%  
      Тип отношений: Гармония и понимание`
    );
  else if (
    (woomen.toLowerCase() == "рак" && men.toLowerCase() == "дева") ||
    (woomen.toLowerCase() == "дева" && men.toLowerCase() == "рак")
  )
    alert(
      `Совместимость в любви: 80% 
      Совместимость в браке: 100%  
      Тип отношений: Хранители семейного очага`
    );
  else if (
    (woomen.toLowerCase() == "рак" && men.toLowerCase() == "весы") ||
    (woomen.toLowerCase() == "весы" && men.toLowerCase() == "рак")
  )
    alert(
      `Совместимость в любви: 90% 
      Совместимость в браке: 100%  
      Тип отношений: Неторопливо, но основательно`
    );
  else if (
    (woomen.toLowerCase() == "рак" && men.toLowerCase() == "скорпион") ||
    (woomen.toLowerCase() == "скорпион" && men.toLowerCase() == "рак")
  )
    alert(
      `Совместимость в любви: 90% 
        Совместимость в браке: 60%  
        Тип отношений: Параллельные миры`
    );
  else if (
    (woomen.toLowerCase() == "рак" && men.toLowerCase() == "стрелец") ||
    (woomen.toLowerCase() == "стрелец" && men.toLowerCase() == "рак")
  )
    alert(
      `Совместимость в любви: 80% 
        Совместимость в браке: 40%  
        Тип отношений: На грани невозможного`
    );
  else if (
    (woomen.toLowerCase() == "рак" && men.toLowerCase() == "козерог") ||
    (woomen.toLowerCase() == "козерог" && men.toLowerCase() == "рак")
  )
    alert(
      `Совместимость в любви: 90% 
      Совместимость в браке: 100%  
      Тип отношений: От дружбы до любви`
    );
  else if (
    (woomen.toLowerCase() == "рак" && men.toLowerCase() == "водолей") ||
    (woomen.toLowerCase() == "водолей" && men.toLowerCase() == "рак")
  )
    alert(
      `Совместимость в любви: 80% 
        Совместимость в браке: 60%  
        Тип отношений: Непредсказуемые повороты`
    );
  else if (
    (woomen.toLowerCase() == "рак" && men.toLowerCase() == "рыбы") ||
    (woomen.toLowerCase() == "рыбы" && men.toLowerCase() == "рак")
  )
    alert(
      `Совместимость в любви: 100% 
        Совместимость в браке: 100%  
        Тип отношений: Ветер удачи`
    );
  else if (woomen.toLowerCase() == "лев" && men.toLowerCase() == "лев")
    alert(
      `Совместимость в любви: 100% 
      Совместимость в браке: 70%  
      Тип отношений: Сила двух стихий`
    );
  else if (
    (woomen.toLowerCase() == "лев" && men.toLowerCase() == "дева") ||
    (woomen.toLowerCase() == "дева" && men.toLowerCase() == "лев")
  )
    alert(
      `Совместимость в любви: 80% 
        Совместимость в браке: 80%  
        Тип отношений: Приятная зависимость`
    );
  else if (
    (woomen.toLowerCase() == "лев" && men.toLowerCase() == "весы") ||
    (woomen.toLowerCase() == "весы" && men.toLowerCase() == "лев")
  )
    alert(
      `Совместимость в любви: 90% 
        Совместимость в браке: 60%  
        Тип отношений: Разница потенциалов`
    );
  else if (
    (woomen.toLowerCase() == "лев" && men.toLowerCase() == "скорпион") ||
    (woomen.toLowerCase() == "скорпион" && men.toLowerCase() == "лев")
  )
    alert(
      `Совместимость в любви: 100% 
        Совместимость в браке: 80%  
        Тип отношений: Две звезды`
    );
  else if (
    (woomen.toLowerCase() == "лев" && men.toLowerCase() == "стрелец") ||
    (woomen.toLowerCase() == "стрелец" && men.toLowerCase() == "лев")
  )
    alert(
      `Совместимость в любви: 100% 
        Совместимость в браке: 80%  
        Тип отношений: Умение взять от жизни все`
    );
  else if (
    (woomen.toLowerCase() == "лев" && men.toLowerCase() == "козерог") ||
    (woomen.toLowerCase() == "козерог" && men.toLowerCase() == "лев")
  )
    alert(
      `Совместимость в любви: 90% 
        Совместимость в браке: 70%  
        Тип отношений: Путь к вершине`
    );
  else if (
    (woomen.toLowerCase() == "лев" && men.toLowerCase() == "водолей") ||
    (woomen.toLowerCase() == "водолей" && men.toLowerCase() == "лев")
  )
    alert(
      `Совместимость в любви: 90% 
      Совместимость в браке: 60%  
      Тип отношений: Неземное притяжение`
    );
  else if (
    (woomen.toLowerCase() == "лев" && men.toLowerCase() == "рыбы") ||
    (woomen.toLowerCase() == "рыбы" && men.toLowerCase() == "лев")
  )
    alert(
      `Совместимость в любви: 80% 
        Совместимость в браке: 50%  
        Тип отношений: Практичный подход`
    );
  else if (woomen.toLowerCase() == "дева" && men.toLowerCase() == "дева")
    alert(
      `Совместимость в любви: 70% 
      Совместимость в браке: 100%  
      Тип отношений: Плечом к плечу`
    );
  else if (
    (woomen.toLowerCase() == "дева" && men.toLowerCase() == "весы") ||
    (woomen.toLowerCase() == "весы" && men.toLowerCase() == "дева")
  )
    alert(
      `Совместимость в любви: 90% 
        Совместимость в браке: 70%  
        Тип отношений: Вопреки всему`
    );
  else if (
    (woomen.toLowerCase() == "дева" && men.toLowerCase() == "скорпион") ||
    (woomen.toLowerCase() == "скорпион" && men.toLowerCase() == "дева")
  )
    alert(
      `Совместимость в любви: 90% 
      Совместимость в браке: 100%  
      Тип отношений: Вместе против всех`
    );
  else if (
    (woomen.toLowerCase() == "дева" && men.toLowerCase() == "стрелец") ||
    (woomen.toLowerCase() == "стрелец" && men.toLowerCase() == "дева")
  )
    alert(
      `Совместимость в любви: 70% 
      Совместимость в браке: 40%  
      Тип отношений: Тайные желания`
    );
  else if (
    (woomen.toLowerCase() == "дева" && men.toLowerCase() == "козерог") ||
    (woomen.toLowerCase() == "козерог" && men.toLowerCase() == "дева")
  )
    alert(
      `Совместимость в любви: 60% 
        Совместимость в браке: 100%  
        Тип отношений: Через тернии к звездам`
    );
  else if (
    (woomen.toLowerCase() == "дева" && men.toLowerCase() == "водолей") ||
    (woomen.toLowerCase() == "водолей" && men.toLowerCase() == "дева")
  )
    alert(
      `Совместимость в любви: 70% 
        Совместимость в браке: 40%  
        Тип отношений: Яркость и контраст`
    );
  else if (
    (woomen.toLowerCase() == "дева" && men.toLowerCase() == "рыбы") ||
    (woomen.toLowerCase() == "рыбы" && men.toLowerCase() == "дева")
  )
    alert(
      `Совместимость в любви: 60% 
      Совместимость в браке: 40%  
      Тип отношений: Наперекор стереотипам`
    );
  else if (woomen.toLowerCase() == "весы" && men.toLowerCase() == "весы")
    alert(
      `Совместимость в любви: 90% 
      Совместимость в браке: 80%  
      Тип отношений: Духовное родство`
    );
  else if (
    (woomen.toLowerCase() == "весы" && men.toLowerCase() == "скорпион") ||
    (woomen.toLowerCase() == "скорпион" && men.toLowerCase() == "весы")
  )
    alert(
      `Совместимость в любви: 100% 
      Совместимость в браке: 60%  
      Тип отношений: Хрупкое равновесие`
    );
  else if (
    (woomen.toLowerCase() == "весы" && men.toLowerCase() == "стрелец") ||
    (woomen.toLowerCase() == "стрелец" && men.toLowerCase() == "весы")
  )
    alert(
      `Совместимость в любви: 100% 
        Совместимость в браке: 70%  
        Тип отношений: Идеальные любовники`
    );
  else if (
    (woomen.toLowerCase() == "весы" && men.toLowerCase() == "козерог") ||
    (woomen.toLowerCase() == "козерог" && men.toLowerCase() == "весы")
  )
    alert(
      `Совместимость в любви: 90% 
      Совместимость в браке: 90%  
      Тип отношений: Любовь и нежность`
    );
  else if (
    (woomen.toLowerCase() == "весы" && men.toLowerCase() == "водолей") ||
    (woomen.toLowerCase() == "водолей" && men.toLowerCase() == "весы")
  )
    alert(
      `Совместимость в любви: 100% 
      Совместимость в браке: 70%  
      Тип отношений: Ромео и Джульетта`
    );
  else if (
    (woomen.toLowerCase() == "весы" && men.toLowerCase() == "рыбы") ||
    (woomen.toLowerCase() == "рыбы" && men.toLowerCase() == "весы")
  )
    alert(
      `Совместимость в любви: 80% 
      Совместимость в браке: 60%  
      Тип отношений: Игры разума и чувств`
    );
  else if (
    woomen.toLowerCase() == "скорпион" &&
    men.toLowerCase() == "скорпион"
  )
    alert(
      `Совместимость в любви: 100% 
      Совместимость в браке: 40%  
      Тип отношений: Война миров`
    );
  else if (
    (woomen.toLowerCase() == "скорпион" && men.toLowerCase() == "стрелец") ||
    (woomen.toLowerCase() == "стрелец" && men.toLowerCase() == "скорпион")
  )
    alert(
      `Совместимость в любви: 90% 
      Совместимость в браке: 40%  
      Тип отношений: Накал бурных страстей`
    );
  else if (
    (woomen.toLowerCase() == "скорпион" && men.toLowerCase() == "козерог") ||
    (woomen.toLowerCase() == "козерог" && men.toLowerCase() == "скорпион")
  )
    alert(
      `Совместимость в любви: 100% 
        Совместимость в браке: 90%  
        Тип отношений: Вся гамма чувств`
    );
  else if (
    (woomen.toLowerCase() == "скорпион" && men.toLowerCase() == "водолей") ||
    (woomen.toLowerCase() == "водолей" && men.toLowerCase() == "скорпион")
  )
    alert(
      `Совместимость в любви: 80% 
      Совместимость в браке: 50%  
      Тип отношений: Необыкновенное чудо`
    );
  else if (
    (woomen.toLowerCase() == "скорпион" && men.toLowerCase() == "рыбы") ||
    (woomen.toLowerCase() == "рыбы" && men.toLowerCase() == "скорпион")
  )
    alert(
      `Совместимость в любви: 90% 
      Совместимость в браке: 80%  
      Тип отношений: Взаимная удача`
    );
  else if (woomen.toLowerCase() == "стрелец" && men.toLowerCase() == "стрелец")
    alert(
      `Совместимость в любви: 100% 
      Совместимость в браке: 40%  
      Тип отношений: Жизнь сегодняшним днем`
    );
  else if (
    (woomen.toLowerCase() == "стрелец" && men.toLowerCase() == "козерог") ||
    (woomen.toLowerCase() == "козерог" && men.toLowerCase() == "стрелец")
  )
    alert(
      `Совместимость в любви: 80% 
        Совместимость в браке: 60%  
        Тип отношений: На разных сторонах улицы`
    );
  else if (
    (woomen.toLowerCase() == "стрелец" && men.toLowerCase() == "водолей") ||
    (woomen.toLowerCase() == "водолей" && men.toLowerCase() == "стрелец")
  )
    alert(
      `Совместимость в любви: 100% 
      Совместимость в браке: 40%  
      Тип отношений: Череда чудес`
    );
  else if (
    (woomen.toLowerCase() == "стрелец" && men.toLowerCase() == "рыбы") ||
    (woomen.toLowerCase() == "рыбы" && men.toLowerCase() == "стрелец")
  )
    alert(
      `Совместимость в любви: 70% 
      Совместимость в браке: 40%  
      Тип отношений: Учиться уступать`
    );
  else if (woomen.toLowerCase() == "козерог" && men.toLowerCase() == "козерог")
    alert(
      `Совместимость в любви: 80% 
      Совместимость в браке: 100%  
      Тип отношений: Друзья, любовники, партнеры`
    );
  else if (
    (woomen.toLowerCase() == "козерог" && men.toLowerCase() == "водолей") ||
    (woomen.toLowerCase() == "водолей" && men.toLowerCase() == "козерог")
  )
    alert(
      `Совместимость в любви: 80% 
      Совместимость в браке: 70%  
      Тип отношений: Трудности перевода`
    );
  else if (
    (woomen.toLowerCase() == "козерог" && men.toLowerCase() == "рыбы") ||
    (woomen.toLowerCase() == "рыбы" && men.toLowerCase() == "козерог")
  )
    alert(
      `Совместимость в любви: 90% 
      Совместимость в браке: 100%  
      Тип отношений: Две половинки`
    );
  else if (woomen.toLowerCase() == "водолей" && men.toLowerCase() == "водолей")
    alert(
      `Совместимость в любви: 70% 
      Совместимость в браке: 30%  
      Тип отношений: Не вспоминая о будущем`
    );
  else if (
    (woomen.toLowerCase() == "водолей" && men.toLowerCase() == "рыбы") ||
    (woomen.toLowerCase() == "рыбы" && men.toLowerCase() == "водолей")
  )
    alert(
      `Совместимость в любви: 100% 
      Совместимость в браке: 60%  
      Тип отношений: Радуга без границ`
    );
  else if (woomen.toLowerCase() == "рыбы" && men.toLowerCase() == "рыбы")
    alert(
      `Совместимость в любви: 100% 
      Совместимость в браке: 60%  
      Тип отношений: Путь к себе`
    );
}
alert(compatibility());
