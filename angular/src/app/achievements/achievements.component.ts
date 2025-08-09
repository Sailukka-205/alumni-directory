import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent implements OnInit {
  alumniName: string | null = '';
  projects: string[] = [];

  private alumniProjects: { [key: string]: string[] } = {
    'John Doe': ['AI Chatbot for Healthcare', 'Fraud Detection System'],
    'Emma Smith': ['Stock Market Prediction', 'NLP Sentiment Analysis'],
    'Michael Lee': ['Real-time Data Processing', 'Self-Driving Car AI']
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.alumniName = this.route.snapshot.paramMap.get('name');
    this.projects = this.alumniProjects[this.alumniName!] || ['No projects found'];
  }
}
