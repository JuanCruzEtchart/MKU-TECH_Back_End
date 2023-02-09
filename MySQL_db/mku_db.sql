-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 09-02-2023 a las 06:38:03
-- Versión del servidor: 10.4.25-MariaDB
-- Versión de PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `mku_db`
--
CREATE DATABASE IF NOT EXISTS `mku_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `mku_db`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `fleets`
--

DROP TABLE IF EXISTS `fleets`;
CREATE TABLE `fleets` (
  `id` int(11) NOT NULL,
  `latitude` varchar(120) DEFAULT NULL,
  `longitude` varchar(120) DEFAULT NULL,
  `door_status` int(11) NOT NULL DEFAULT 0,
  `vehicle_plate` varchar(20) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `fleets`
--

INSERT INTO `fleets` (`id`, `latitude`, `longitude`, `door_status`, `vehicle_plate`, `user_id`, `created_at`, `updated_at`) VALUES
(3, '-34.59408712261369', '-58.39448015216882', 0, '123456', 1, '2023-02-06 23:09:28', '2023-02-06 23:09:28'),
(4, '-34.59408712261369', '-58.39448015216882', 0, '789123', 1, '2023-02-06 23:09:28', '2023-02-06 23:09:28');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `password` varchar(300) NOT NULL,
  `admin_status` int(1) DEFAULT 0,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `password`, `admin_status`, `created_at`, `updated_at`) VALUES
(1, 'Admin', 'Admin123', 1, '2023-02-06 22:45:22', '2023-02-06 22:45:22'),
(2, '\"Carlitos\"', '\"Carlitos123\"', 0, '2023-02-09 00:07:23', '2023-02-09 00:07:23'),
(3, '\"Carlitos2\"', '\"Carlitos123\"', 0, '2023-02-09 00:08:39', '2023-02-09 00:08:39'),
(4, '\"Carlitos3\"', '\"Carlitos123\"', 0, '2023-02-09 00:09:27', '2023-02-09 00:09:27'),
(8, '123', '123', 0, '2023-02-09 04:28:56', '2023-02-09 04:28:56'),
(9, '124534', '1354325', 0, '2023-02-09 04:29:59', '2023-02-09 04:29:59'),
(10, 'Hola', '$2a$12$3SYhF6Q2jvWFZSCKecSUtefXAjwWTytMzJ9VnYA.f3hsRSp5j4Nyq', 0, '2023-02-09 04:42:49', '2023-02-09 04:42:49'),
(11, 'prueba contraseña', '$2a$12$jm7M0wVmJqDfr3J6FB3kveHWUCAAlUUoi3LwtBeIH0ApNotrkDSyC', 0, '2023-02-09 05:00:06', '2023-02-09 05:00:06');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `fleets`
--
ALTER TABLE `fleets`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `vehicle_plate` (`vehicle_plate`),
  ADD KEY `user_id` (`user_id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `fleets`
--
ALTER TABLE `fleets`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `fleets`
--
ALTER TABLE `fleets`
  ADD CONSTRAINT `fleets_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
