<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
//    TODO: SET DEFAULT URL
    /**
     * @Route("/{_locale}/", name="homepage")
     */
    public function indexAction()
    {
        return $this->render('AppBundle:Default:default.html.twig');
    }
}
