-- MySQL dump 10.16  Distrib 10.2.14-MariaDB, for osx10.12 (x86_64)
--
-- Host: localhost    Database: rentals
-- ------------------------------------------------------
-- Server version	10.2.14-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `parent`
--

DROP TABLE IF EXISTS `parent`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `parent` (
  `id` int(11) NOT NULL,
  `total_floors` int(11) DEFAULT NULL,
  `total_units` int(11) DEFAULT NULL,
  `wheelchair_access` varchar(10) DEFAULT NULL,
  `pets_allowed` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `parent`
--

LOCK TABLES `parent` WRITE;
/*!40000 ALTER TABLE `parent` DISABLE KEYS */;
INSERT INTO `parent` VALUES (1,2,8,'yes','yes'),(2,2,8,'yes','no'),(3,2,8,'no','yes'),(4,2,8,'no','no');
/*!40000 ALTER TABLE `parent` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `test`
--

DROP TABLE IF EXISTS `test`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `test` (
  `col_one` varchar(20) DEFAULT NULL,
  `col two` varchar(10) DEFAULT NULL,
  `col_three` varchar(10) NOT NULL,
  `pets_allowed` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `test`
--

LOCK TABLES `test` WRITE;
/*!40000 ALTER TABLE `test` DISABLE KEYS */;
INSERT INTO `test` VALUES ('new_val','valueTwo','','new_val'),('','','','no'),('hello',NULL,'','there'),('world',NULL,'','turd'),('string',NULL,'','another'),(NULL,'testing','',''),(NULL,'column','',''),(NULL,'two','',''),(NULL,NULL,'testing','1'),(NULL,NULL,'column',''),(NULL,NULL,'two','');
/*!40000 ALTER TABLE `test` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `unit`
--

DROP TABLE IF EXISTS `unit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `unit` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `bedrooms` int(11) DEFAULT NULL,
  `bathrooms` int(11) DEFAULT NULL,
  `floor_level` varchar(8) DEFAULT NULL,
  `unit_number` int(11) DEFAULT NULL,
  `hardwood_floor` varchar(10) DEFAULT NULL,
  `parent_id` varchar(2) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `unit`
--

LOCK TABLES `unit` WRITE;
/*!40000 ALTER TABLE `unit` DISABLE KEYS */;
INSERT INTO `unit` VALUES (1,1,1,'1st',1101,'yes','1'),(2,1,1,'1st',1102,'yes','1'),(3,1,1,'1st',1103,'no','1'),(4,1,1,'1st',1104,'no','1'),(5,2,2,'1st',1105,'yes','1'),(6,2,2,'1st',1106,'no','1'),(7,4,4,'2nd',1201,'yes','1'),(8,4,4,'2nd',1202,'no','1'),(9,1,1,'1st',2101,'yes','2'),(10,1,1,'1st',2102,'yes','2'),(11,1,1,'1st',2103,'no','2'),(12,1,1,'1st',2104,'no','2'),(13,2,2,'1st',2105,'yes','2'),(14,2,2,'1st',2106,'no','2'),(15,4,4,'2nd',2201,'yes','2'),(16,4,4,'2nd',2202,'no','2'),(17,1,1,'1st',3101,'yes','3'),(18,1,1,'1st',3102,'yes','3'),(19,1,1,'1st',3103,'no','3'),(20,1,1,'1st',3104,'no','3'),(21,2,2,'1st',3105,'yes','3'),(22,2,2,'1st',3106,'no','3'),(23,4,4,'2nd',3201,'yes','3'),(24,4,4,'2nd',3202,'no','3'),(25,1,1,'1st',4101,'yes','4'),(26,1,1,'1st',4102,'yes','4'),(27,1,1,'1st',4103,'no','4'),(28,1,1,'1st',4104,'no','4'),(29,2,2,'1st',4105,'yes','4'),(30,2,2,'1st',4106,'no','4'),(31,4,4,'2nd',4201,'yes','4'),(32,4,4,'2nd',4202,'no','4');
/*!40000 ALTER TABLE `unit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` int(10) NOT NULL,
  `first_name` varchar(15) DEFAULT NULL,
  `last_name` varchar(20) DEFAULT NULL,
  `phone` int(11) DEFAULT NULL,
  `email` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (5,'Dean','Winchester',1234567,'badass@.supernat.com');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-04-17 15:23:54
