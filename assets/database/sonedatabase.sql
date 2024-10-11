-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Paź 11, 2024 at 08:31 PM
-- Wersja serwera: 10.4.32-MariaDB
-- Wersja PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sonedatabase`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `projects`
--

CREATE TABLE `projects` (
  `id` int(11) NOT NULL,
  `nazwa` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `photo` varchar(255) NOT NULL,
  `badge` text NOT NULL,
  `description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `projects`
--

INSERT INTO `projects` (`id`, `nazwa`, `url`, `photo`, `badge`, `description`) VALUES
(1, '18', 'projects/18', 'p18.jpg', '', 'Zaproszenie na 18 urodziny'),
(2, 'PORTAL', 'projects/portal', 'pportal.jpg', '<div class=\"warningBadge\" style=\"border-color: rgb(223, 39, 14); color:rgb(223, 39, 14);\"><div class=\"circle\" style=\"background-color: rgb(223, 39, 14);\"></div> PC ONLY</div>', 'Projekt szkolny'),
(3, 'BB', 'projects/BB', 'BB.jpg', '', NULL),
(4, 'MULTIVERSE', 'projects/multiverse', 'MULTIVERSE.jpg', '<div class=\"warningBadge\" style=\"border-color: rgb(223, 39, 14); color:rgb(223, 39, 14);\"><div class=\"circle\" style=\"background-color: rgb(223, 39, 14);\"></div> PC ONLY</div>', 'Projekt szkolny'),
(5, 'Kalkulator Paliwa', 'projects/spalaniePaliwa', 'kp.jpg', '', 'Kalkulator obliczający cenę paliwa dla danej trasy'),
(6, 'Kalkulator Argusów', 'projects/kalkulatorArgusow', 'ka.jpg', '<div class=\"warningBadge\"><div class=\"circle\"></div> NEW</div>', 'Przelicznik argusów na pln'),
(7, 'STUDY TIMER', 'projects/studyTimer', 'st.jpg', '<div class=\"warningBadge\" style=\"border-color: rgb(29, 147, 216); color: rgb(29, 147, 216);\"><div class=\"circle\" style=\"background-color: rgb(29, 147, 216);\"></div> BETA</div>', 'Timer pomodoro');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `projects`
--
ALTER TABLE `projects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
