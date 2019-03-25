/*
SQLyog Ultimate v12.09 (64 bit)
MySQL - 10.1.26-MariaDB : Database - crawl
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`crawl` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci */;

USE `crawl`;

/*Table structure for table `token` */

DROP TABLE IF EXISTS `token`;

CREATE TABLE `token` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `access_token` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `count` int(11) DEFAULT '0',
  `status` int(11) DEFAULT '0',
  `updated_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `token` */

insert  into `token`(`id`,`access_token`,`user_id`,`count`,`status`,`updated_at`) values (1,'EAAAAUaZA8jlABACPtoN13AhfUJK58sJ4zvMUBWMgd1blYCM1ew9uax0qhEDX6z0cPMV8iRKxd9ksVZCUlgcVPLHzYNlis3fNNikjzOQQfacWPIwQW4W9u6Yr9egsOvVvGBNzp2Jx4uav3dZCuWYBh8224zDxZBVUJpVnab5aKaJO0tlA1rr5',123456789,57,0,'2019-03-25 17:07:26'),(2,'EAAAAUaZA8jlABACPtoN13AhfUJK58sJ4zvMUBWMgd1blYCM1ew9uax0qhEDX6z0cPMV8iRKxd9ksVZCUlgcVPLHzYNlis3fNNikjzOQQfacWPIwQW4W9u6Yr9egsOvVvGBNzp2Jx4uav3dZCuWYBh8224zDxZBVUJpVnab5aKaJO0tlA1rr5',2147483647,20,0,'2019-03-25 17:06:34');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
