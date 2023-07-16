-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Май 09 2023 г., 19:46
-- Версия сервера: 8.0.30
-- Версия PHP: 8.0.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `wostix`
--

-- --------------------------------------------------------

--
-- Структура таблицы `order`
--

CREATE TABLE `order` (
  `id` int NOT NULL,
  `username` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `usersurname` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `email` varchar(150) COLLATE utf8mb4_general_ci NOT NULL,
  `phone` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `address` varchar(150) COLLATE utf8mb4_general_ci NOT NULL,
  `weight` int NOT NULL,
  `sort` varchar(40) COLLATE utf8mb4_general_ci NOT NULL,
  `datetime` varchar(150) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `order`
--

INSERT INTO `order` (`id`, `username`, `usersurname`, `email`, `phone`, `address`, `weight`, `sort`, `datetime`) VALUES
(1, 'Armen', 'Khacharyan', 'armen_khchatryan_02@mail.ru', '+37494741460', 'Yerevan Armenia', 22, 'metal', '2023-05-09T20:27'),
(2, 'Armen', 'Khacharyan', 'armen_khchatryan_02@mail.ru', '+37494741460', 'Yerevan Armenia', 22, 'metal', '2023-05-09T20:27'),
(3, 'Makar', 'Makaryan', 'makr@mail.ru', '452167893249', 'sahdkfcdnx dsfnc,', 22, 'plastic', '2023-05-09T20:36'),
(4, 'armen_khacahtryan_02', 'asdasdsad', 'aSDF@MAJSAIOD', 'SDADSSADASDSA', 'DSADSAD', 21, 'paper', '2023-05-09T20:38'),
(5, 'armen_khacahtryan_02', 'asdasdsad', 'fasdghjdgsadasdsajjhas@mai.ru', '12345trgfdswewr', 'yerevan', 22, 'plastic', '2023-05-09T20:40'),
(6, 'armen_khacahtryan_02', 'asdasdsad', 'armen@sadasdmail.ru', '12345trgfdswewr', 'dsadasdsadsadsad', 22, 'plastic', '2023-05-09T00:42');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `order`
--
ALTER TABLE `order`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
