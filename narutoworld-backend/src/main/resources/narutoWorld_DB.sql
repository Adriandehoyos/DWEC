-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema narutoworld
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema narutoworld
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `narutoworld` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `narutoworld` ;

-- -----------------------------------------------------
-- Table `narutoworld`.`ninjas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `narutoworld`.`ninjas` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `ninjaname` VARCHAR(50) NOT NULL,
  `clan` VARCHAR(50) NULL DEFAULT NULL,
  `fullname` VARCHAR(100) NULL DEFAULT NULL,
  `image1` TEXT NULL DEFAULT NULL,
  `image2` TEXT NULL DEFAULT NULL,
  `gender` VARCHAR(20) NULL DEFAULT NULL,
  `level` VARCHAR(10) NULL DEFAULT NULL,
  `naturetype` VARCHAR(50) NULL DEFAULT NULL,
  `affiliation` VARCHAR(100) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id` (`id` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `narutoworld`.`ninjastats`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `narutoworld`.`ninjastats` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `ninjutsu` DOUBLE NOT NULL,
  `taijutsu` DOUBLE NOT NULL,
  `genjutsu` DOUBLE NOT NULL,
  `intelligence` DOUBLE NOT NULL,
  `strength` DOUBLE NOT NULL,
  `speed` DOUBLE NOT NULL,
  `stamina` DOUBLE NOT NULL,
  `handseals` DOUBLE NOT NULL,
  `ninjaid` BIGINT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`, `ninjaid`),
  UNIQUE INDEX `id` (`id` ASC) VISIBLE,
  INDEX `fk_stats_ninjas_idx` (`ninjaid` ASC) VISIBLE,
  CONSTRAINT `fk_stats_ninjas`
    FOREIGN KEY (`ninjaid`)
    REFERENCES `narutoworld`.`ninjas` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;


USE `narutoworld`;

-- Desactivar chequeos para evitar errores de orden al insertar
SET FOREIGN_KEY_CHECKS = 0;

-- (Opcional) Limpiar tablas antes de insertar
TRUNCATE TABLE `ninjastats`;
TRUNCATE TABLE `ninjas`;

-- -----------------------------------------------------
-- INSERCIÓN EN TABLA NINJAS (IDs 1-50)
-- -----------------------------------------------------
INSERT INTO `ninjas` (`id`, `ninjaName`, `clan`, `fullName`, `image1`, `image2`, `gender`, `level`, `naturetype`, `affiliation`) VALUES
(1, 'Naruto', 'Uzumaki', 'Naruto Uzumaki', 'https://static.wikia.nocookie.net/naruto/images/d/d6/Naruto_Part_I.png', 'https://static.wikia.nocookie.net/naruto/images/7/7d/Naruto_Part_II.png', 'Male', 'Kage', 'Wind, All Bijuu', 'Konohagakure'),
(2, 'Sasuke', 'Uchiha', 'Sasuke Uchiha', 'https://static.wikia.nocookie.net/naruto/images/1/13/Sasuke_Part_2.png', 'https://static.wikia.nocookie.net/naruto/images/2/21/Sasuke_Part_1.png', 'Male', 'Rogue', 'Lightning, Fire', 'Konohagakure'),
(3, 'Sakura', 'Haruno', 'Sakura Haruno', 'https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2024/07/naruto2-2.jpg', 'https://static.wikia.nocookie.net/naruto/images/6/64/Sakura_Part_1.png', 'Female', 'Jonin', 'Earth, Water, Yin, Yang', 'Konohagakure'),
(4, 'Kakashi', 'Hatake', 'Kakashi Hatake', 'https://static.wikia.nocookie.net/naruto/images/2/27/Kakashi_Hatake.png', 'https://static.wikia.nocookie.net/naruto/images/2/25/Kakashi_Part_III.png', 'Male', 'Kage', 'Lightning, Earth, Water', 'Konohagakure'),
(5, 'Itachi', 'Uchiha', 'Itachi Uchiha', 'https://static.wikia.nocookie.net/naruto/images/b/bb/Itachi.png', 'https://static.wikia.nocookie.net/naruto/images/2/25/Itachi_Anbu.png', 'Male', 'Rogue', 'Fire, Water, Yin', 'Akatsuki'),
(6, 'Madara', 'Uchiha', 'Madara Uchiha', 'https://static.wikia.nocookie.net/naruto/images/f/fd/Madara.png', 'https://screenscore.digitalmama.id/wp-content/uploads/2025/07/114654efd2169c3ad5992c5df959dcef-625x1024.jpg', 'Male', 'Kage', 'Fire, All Nature', 'None'),
(7, 'Hashirama', 'Senju', 'Hashirama Senju', 'https://static.wikia.nocookie.net/naruto/images/7/7e/Hashirama_Senju.png', 'https://static.wikia.nocookie.net/naruto/images/7/7e/Hashirama_Senju.png', 'Male', 'Kage', 'Wood, Earth, Water', 'Konohagakure'),
(8, 'Minato', 'Namikaze', 'Minato Namikaze', 'https://static.wikia.nocookie.net/naruto/images/7/71/Minato_Namikaze.png', 'https://static.wikia.nocookie.net/naruto/images/7/71/Minato_Namikaze.png', 'Male', 'Kage', 'Lightning, Fire, Wind', 'Konohagakure'),
(9, 'Jiraiya', 'N/A', 'Jiraiya', 'https://static.wikia.nocookie.net/naruto/images/2/21/Profile_Jiraiya.png', 'https://static.wikia.nocookie.net/naruto/images/2/21/Profile_Jiraiya.png', 'Male', 'Sannin', 'Fire, Earth, Oil', 'Konohagakure'),
(10, 'Tsunade', 'Senju', 'Tsunade', 'https://static.wikia.nocookie.net/naruto/images/b/b3/Tsunade_infobox2.png', 'https://static.wikia.nocookie.net/naruto/images/b/b3/Tsunade_infobox2.png', 'Female', 'Kage', 'Lightning, Earth, Water', 'Konohagakure'),
(11, 'Orochimaru', 'N/A', 'Orochimaru', 'https://static.wikia.nocookie.net/naruto/images/1/14/Orochimaru_Infobox.png', 'https://static.wikia.nocookie.net/naruto/images/b/be/Orochimaru_Part_III.png', 'Male', 'Sannin', 'Wind, Earth, Water', 'Otogakure'),
(12, 'Gaara', 'N/A', 'Gaara', 'https://w0.peakpx.com/wallpaper/986/978/HD-wallpaper-gaara-naruto.jpg', 'https://i.pinimg.com/474x/8d/85/a9/8d85a9e3cdf7d13e021562bc5cea68d4.jpg', 'Male', 'Kage', 'Sand, Wind, Earth', 'Sunagakure'),
(13, 'Hinata', 'Hyuga', 'Hinata Hyuga', 'https://static.wikia.nocookie.net/naruto/images/9/97/Hinata.png', 'https://static.wikia.nocookie.net/naruto/images/9/97/Hinata.png', 'Female', 'Chunin', 'Fire, Lightning', 'Konohagakure'),
(14, 'Shikamaru', 'Nara', 'Shikamaru Nara', 'https://static.wikia.nocookie.net/naruto/images/4/44/Shikamaru_Part_I.png', 'https://static.wikia.nocookie.net/naruto/images/4/44/Shikamaru_Part_I.png', 'Male', 'Jonin', 'Yin, Fire, Earth', 'Konohagakure'),
(15, 'Rock Lee', 'N/A', 'Rock Lee', 'https://static.wikia.nocookie.net/naruto/images/9/97/Rock_Lee_Part_I.png', 'https://static.wikia.nocookie.net/naruto/images/9/97/Rock_Lee_Part_I.png', 'Male', 'Jonin', 'None', 'Konohagakure'),
(16, 'Neji', 'Hyuga', 'Neji Hyuga', 'https://static.wikia.nocookie.net/naruto/images/7/7e/Neji_Part_I.png', 'https://static.wikia.nocookie.net/naruto/images/7/7e/Neji_Part_I.png', 'Male', 'Jonin', 'Fire, Earth, Water', 'Konohagakure'),
(17, 'Might Guy', 'N/A', 'Might Guy', 'url_guy_face.jpg', 'url_guy_body.jpg', 'Male', 'Jonin', 'Fire, Lightning', 'Konohagakure'),
(18, 'Obito', 'Uchiha', 'Obito Uchiha', 'https://static.wikia.nocookie.net/naruto/images/4/4a/Obito_Uchiha.png', 'https://static.wikia.nocookie.net/naruto/images/4/4a/Obito_Uchiha.png', 'Male', 'Rogue', 'Fire, Earth, Wood', 'Akatsuki'),
(19, 'Nagato (Pain)', 'Uzumaki', 'Nagato', 'https://static.wikia.nocookie.net/shinobi-of-the-sea/images/7/7b/Pain_1.png/', 'https://static.wikia.nocookie.net/shinobi-of-the-sea/images/7/7b/Pain_1.png/', 'Male', 'Leader', 'All Nature Types', 'Akatsuki'),
(20, 'Killer Bee', 'N/A', 'Killer Bee', 'https://static.wikia.nocookie.net/naruto/images/6/63/Killer_B.png', 'https://static.wikia.nocookie.net/naruto/images/6/63/Killer_B.png', 'Male', 'Jonin', 'Lightning, Water', 'Kumogakure'),
(21, 'Tobirama', 'Senju', 'Tobirama Senju', 'https://static.wikia.nocookie.net/naruto/images/b/be/Tobirama_Senju.png', 'https://static.wikia.nocookie.net/naruto/images/b/be/Tobirama_Senju.png', 'Male', 'Kage', 'Water, Space-Time', 'Konohagakure'),
(22, 'Hiruzen', 'Sarutobi', 'Hiruzen Sarutobi', 'https://static.wikia.nocookie.net/naruto/images/e/e4/Hiruzen_Sarutobi.png', 'https://static.wikia.nocookie.net/naruto/images/e/e4/Hiruzen_Sarutobi.png', 'Male', 'Kage', 'All 5 Basic Natures', 'Konohagakure'),
(23, 'Kisame', 'Hoshigaki', 'Kisame Hoshigaki', 'https://static.wikia.nocookie.net/naruto/images/2/25/Kisame.png', 'https://static.wikia.nocookie.net/naruto/images/2/25/Kisame.png', 'Male', 'Rogue', 'Water, Earth', 'Akatsuki'),
(24, 'Deidara', 'N/A', 'Deidara', 'https://static.wikia.nocookie.net/naruto/images/0/06/Deidara.png', 'https://static.wikia.nocookie.net/naruto/images/0/06/Deidara.png', 'Male', 'Rogue', 'Explosion, Earth', 'Akatsuki'),
(25, 'Sasori', 'N/A', 'Sasori', 'https://static.wikia.nocookie.net/naruto/images/f/f7/Sasori.png', 'https://static.wikia.nocookie.net/naruto/images/f/f7/Sasori.png', 'Male', 'Rogue', 'Puppet, Poison', 'Akatsuki'),
(26, 'Kakuzu', 'N/A', 'Kakuzu', 'https://static.wikia.nocookie.net/naruto/images/5/57/Kakuzu.png', 'https://static.wikia.nocookie.net/naruto/images/5/57/Kakuzu.png', 'Male', 'Rogue', 'All 5 Basic Natures', 'Akatsuki'),
(27, 'Hidan', 'N/A', 'Hidan', 'https://static.wikia.nocookie.net/naruto/images/e/e3/Hidan.png', 'https://static.wikia.nocookie.net/naruto/images/e/e3/Hidan.png', 'Male', 'Rogue', 'Jashin Rituals', 'Akatsuki'),
(28, 'Konan', 'N/A', 'Konan', 'https://static.wikia.nocookie.net/naruto/images/5/58/Konan_Infobox.png', 'https://static.wikia.nocookie.net/naruto/images/5/58/Konan_Infobox.png', 'Female', 'Rogue', 'Paper, Wind, Earth', 'Akatsuki'),
(29, 'Zabuza', 'Momochi', 'Zabuza Momochi', 'https://static.wikia.nocookie.net/naruto/images/3/37/Zabuza_Momochi.png', 'https://static.wikia.nocookie.net/naruto/images/3/37/Zabuza_Momochi.png', 'Male', 'Rogue', 'Water', 'Kirigakure'),
(30, 'Haku', 'Yuki', 'Haku Yuki', 'https://static.wikia.nocookie.net/naruto/images/9/90/Haku.png', 'https://static.wikia.nocookie.net/naruto/images/9/90/Haku.png', 'Male', 'Rogue', 'Ice, Water, Wind', 'Kirigakure'),
(31, 'Temari', 'Nara', 'Temari Nara', 'https://static.wikia.nocookie.net/naruto/images/b/bb/Temari_newshot.png', 'https://static.wikia.nocookie.net/naruto/images/b/bb/Temari_newshot.png', 'Female', 'Jonin', 'Wind', 'Sunagakure'),
(32, 'Kankuro', 'N/A', 'Kankuro', 'https://static.wikia.nocookie.net/naruto/images/7/7d/Kankur%C5%8D1.png', 'https://static.wikia.nocookie.net/naruto/images/7/7d/Kankur%C5%8D1.png', 'Male', 'Jonin', 'Puppet, Wind', 'Sunagakure'),
(33, 'Sai', 'Yamanaka', 'Sai', 'https://static.wikia.nocookie.net/naruto/images/0/07/Sai_Infobox.png', 'https://static.wikia.nocookie.net/naruto/images/0/07/Sai_Infobox.png', 'Male', 'Chunin', 'Ink, Yang, Water', 'Konohagakure'),
(34, 'Yamato', 'N/A', 'Yamato', 'https://static.wikia.nocookie.net/naruto/images/f/f7/Yamato_newshot.png', 'https://static.wikia.nocookie.net/naruto/images/f/f7/Yamato_newshot.png', 'Male', 'ANBU', 'Wood, Earth, Water', 'Konohagakure'),
(35, 'Ino', 'Yamanaka', 'Ino Yamanaka', 'https://static.wikia.nocookie.net/naruto/images/d/dd/Ino.png', 'https://static.wikia.nocookie.net/naruto/images/d/dd/Ino.png', 'Female', 'Chunin', 'Yin, Water, Earth', 'Konohagakure'),
(36, 'Choji', 'Akimichi', 'Choji Akimichi', 'https://static.wikia.nocookie.net/naruto/images/7/7d/Ch%C5%8Dji_Akimichi.png', 'https://static.wikia.nocookie.net/naruto/images/7/7d/Ch%C5%8Dji_Akimichi.png', 'Male', 'Chunin', 'Yang, Fire, Earth', 'Konohagakure'),
(37, 'Shino', 'Aburame', 'Shino Aburame', 'https://static.wikia.nocookie.net/naruto/images/9/9c/Shino.png', 'https://static.wikia.nocookie.net/naruto/images/9/9c/Shino.png', 'Male', 'Chunin', 'Earth, Fire, Yang', 'Konohagakure'),
(38, 'Kiba', 'Inuzuka', 'Kiba Inuzuka', 'https://static.wikia.nocookie.net/naruto/images/0/03/Kiba.png', 'https://static.wikia.nocookie.net/naruto/images/0/03/Kiba.png', 'Male', 'Chunin', 'Earth, Yang', 'Konohagakure'),
(39, 'Kabuto', 'Yakushi', 'Kabuto Yakushi', 'https://static.wikia.nocookie.net/naruto/images/c/c9/Kabuto_Part_1.png', 'https://static.wikia.nocookie.net/naruto/images/c/c9/Kabuto_Part_1.png', 'Male', 'Rogue', 'Earth, Water, Yin', 'Otogakure'),
(40, 'Danzo', 'Shimura', 'Danzo Shimura', 'https://static.wikia.nocookie.net/naruto/images/1/17/Danz%C5%8D.png', 'https://static.wikia.nocookie.net/naruto/images/1/17/Danz%C5%8D.png', 'Male', 'Kage', 'Wind, Earth, Fire', 'Konohagakure'),
(41, 'Ay (4th)', 'N/A', 'Ay', 'https://static.wikia.nocookie.net/naruto/images/4/4c/Fourth_Raikage_2.png', 'https://static.wikia.nocookie.net/naruto/images/4/4c/Fourth_Raikage_2.png', 'Male', 'Raikage', 'Lightning, Earth', 'Kumogakure'),
(42, 'Onoki', 'Kamizuru', 'Onoki', 'https://static.wikia.nocookie.net/naruto/images/6/67/%C5%8Cnoki.png', 'https://static.wikia.nocookie.net/naruto/images/6/67/%C5%8Cnoki.png', 'Male', 'Tsuchikage', 'Dust, Earth, Wind', 'Iwagakure'),
(43, 'Mei', 'Terumi', 'Mei Terumi', 'https://static.wikia.nocookie.net/naruto/images/6/6f/Mei.png', 'https://static.wikia.nocookie.net/naruto/images/6/6f/Mei.png', 'Female', 'Mizukage', 'Lava, Boil, Water', 'Kirigakure'),
(44, 'Kaguya', 'Otsutsuki', 'https://static.wikia.nocookie.net/naruto/images/6/6c/Kaguya_%C5%8Ctsutsuki.png', 'https://static.wikia.nocookie.net/naruto/images/6/6c/Kaguya_%C5%8Ctsutsuki.png', 'url_kaguya_body.jpg', 'Female', 'God', 'All Nature Types', 'N/A'),
(45, 'Hagoromo', 'Otsutsuki', 'Hagoromo Otsutsuki', 'https://static.wikia.nocookie.net/naruto/images/6/62/Hagoromo.png', 'https://static.wikia.nocookie.net/naruto/images/6/62/Hagoromo.png', 'Male', 'God', 'All Nature Types', 'N/A'),
(46, 'Asuma', 'Sarutobi', 'Asuma Sarutobi', 'https://static.wikia.nocookie.net/naruto/images/7/7c/Asuma.png', 'https://static.wikia.nocookie.net/naruto/images/7/7c/Asuma.png', 'Male', 'Jonin', 'Wind, Fire', 'Konohagakure'),
(47, 'Kurenai', 'Yuhi', 'Kurenai Yuhi', 'https://static.wikia.nocookie.net/naruto/images/6/67/Kurenai_Part_I.png', 'https://static.wikia.nocookie.net/naruto/images/6/67/Kurenai_Part_I.png', 'Female', 'Jonin', 'Yin', 'Konohagakure'),
(48, 'Kushina', 'Uzumaki', 'Kushina Uzumaki', 'https://static.wikia.nocookie.net/naruto/images/d/db/Kushina.png', 'https://static.wikia.nocookie.net/naruto/images/d/db/Kushina.png', 'Female', 'Jonin', 'Wind, Water, Yin', 'Konohagakure'),
(49, 'Konohamaru', 'Sarutobi', 'Konohamaru Sarutobi', 'https://static.wikia.nocookie.net/naruto/images/8/89/Konohamaru_p1.png', 'https://static.wikia.nocookie.net/naruto/images/8/89/Konohamaru_p1.png', 'Male', 'Jonin', 'Wind, Fire, Yang', 'Konohagakure'),
(50, 'Boruto', 'Uzumaki', 'Boruto Uzumaki', 'https://static.wikia.nocookie.net/naruto/images/d/de/Boruto_Infobox.png', 'https://static.wikia.nocookie.net/naruto/images/d/de/Boruto_Infobox.png', 'Male', 'Genin', 'Lightning, Wind', 'Konohagakure');

-- -----------------------------------------------------
-- INSERCIÓN EN TABLA NINJASTATS (Escala 0-100)
-- -----------------------------------------------------
-- Orden de valores: nin, tai, gen, int, str, spd, sta, handseals, ninjaid

INSERT INTO `ninjastats` (`ninjutsu`, `taijutsu`, `genjutsu`, `intelligence`, `strength`, `speed`, `stamina`, `handseals`, `ninjaid`) VALUES
(80, 70, 30, 60, 70, 70, 100, 30, 1),    -- Naruto
(100, 70, 80, 70, 70, 90, 70, 80, 2),    -- Sasuke
(60, 60, 70, 80, 60, 60, 50, 80, 3),     -- Sakura
(100, 90, 80, 100, 70, 90, 60, 100, 4),  -- Kakashi
(100, 90, 100, 100, 70, 100, 50, 100, 5),-- Itachi
(100, 100, 100, 100, 100, 100, 100, 100, 6), -- Madara
(100, 100, 80, 90, 100, 90, 100, 100, 7),-- Hashirama
(100, 80, 70, 100, 80, 100, 80, 100, 8), -- Minato
(100, 90, 70, 90, 90, 90, 100, 90, 9),   -- Jiraiya
(100, 100, 70, 100, 100, 70, 80, 80, 10),-- Tsunade
(100, 70, 100, 100, 70, 90, 70, 100, 11),-- Orochimaru
(90, 40, 70, 80, 50, 60, 100, 80, 12),   -- Gaara
(60, 70, 50, 70, 30, 50, 40, 60, 13),    -- Hinata
(70, 40, 60, 100, 40, 50, 60, 60, 14),   -- Shikamaru
(10, 100, 10, 40, 90, 90, 70, 20, 15),   -- Rock Lee
(80, 90, 40, 60, 50, 90, 70, 60, 16),    -- Neji
(60, 100, 60, 60, 100, 100, 100, 50, 17),-- Guy
(90, 80, 90, 90, 80, 90, 90, 90, 18),    -- Obito
(100, 70, 100, 100, 70, 80, 100, 100, 19), -- Pain/Nagato
(90, 90, 60, 60, 90, 90, 100, 70, 20),   -- Killer Bee
(100, 90, 70, 100, 80, 100, 90, 100, 21),-- Tobirama
(100, 100, 100, 100, 60, 60, 60, 100, 22), -- Hiruzen
(80, 90, 50, 70, 100, 80, 100, 70, 23),  -- Kisame
(100, 70, 70, 90, 70, 90, 80, 70, 24),   -- Deidara
(100, 80, 80, 100, 60, 90, 80, 80, 25),  -- Sasori
(100, 80, 60, 90, 80, 80, 90, 90, 26),   -- Kakuzu
(100, 90, 60, 60, 80, 70, 100, 70, 27),  -- Hidan
(90, 60, 70, 80, 50, 80, 60, 80, 28),    -- Konan
(90, 90, 50, 60, 80, 80, 80, 80, 29),    -- Zabuza
(70, 20, 20, 80, 30, 80, 40, 80, 30),    -- Haku
(80, 50, 30, 80, 60, 60, 60, 60, 31),    -- Temari
(80, 60, 40, 70, 70, 50, 80, 80, 32),    -- Kankuro
(80, 70, 60, 70, 60, 70, 60, 80, 33),    -- Sai
(90, 80, 70, 90, 70, 80, 70, 70, 34),    -- Yamato
(70, 30, 60, 60, 50, 50, 50, 50, 35),    -- Ino
(70, 60, 20, 40, 90, 40, 70, 50, 36),    -- Choji
(80, 30, 40, 80, 30, 60, 60, 40, 37),    -- Shino
(70, 60, 10, 40, 60, 90, 50, 30, 38),    -- Kiba
(90, 70, 90, 100, 60, 80, 80, 90, 39),   -- Kabuto
(90, 60, 90, 90, 60, 60, 70, 80, 40),    -- Danzo
(90, 100, 60, 60, 100, 100, 100, 70, 41),-- Ay (Raikage)
(100, 40, 70, 100, 40, 60, 60, 90, 42),  -- Onoki
(100, 50, 80, 80, 60, 60, 70, 90, 43),   -- Mei Terumi
(100, 100, 100, 40, 100, 100, 100, 100, 44), -- Kaguya
(100, 100, 100, 100, 100, 100, 100, 100, 45), -- Hagoromo
(90, 80, 70, 80, 80, 80, 80, 70, 46),    -- Asuma
(70, 40, 100, 80, 40, 80, 40, 90, 47),   -- Kurenai
(90, 60, 70, 70, 60, 70, 100, 80, 48),   -- Kushina
(80, 70, 50, 70, 70, 80, 80, 70, 49),    -- Konohamaru
(80, 60, 40, 80, 50, 80, 60, 70, 50);    -- Boruto

-- Reactivar chequeos
SET FOREIGN_KEY_CHECKS = 1;

