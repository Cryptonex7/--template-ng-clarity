import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Colors, Label, ThemeService } from 'ng2-charts';
import { AppThemeService } from 'src/app/services/theme/app-theme.service';

type Theme = 'light-theme' | 'dark-theme';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit, AfterViewInit {
  @ViewChild('canvas') canvasEl: ElementRef;

  @Input() currentMetricIndex: number;
  @Input() stacked: boolean = false;
  @Input() gradient: { r: number; g: number; b: number } = null;
  @Input() noLegend: boolean = false;
  @Input() noXLabels: boolean = false;
  @Input() rawData: boolean = false;
  @Input() variant: string = '';
  @Input() actionsPanelPosition: string = 'bottom-left';
  @Input() width: number = null;
  @Input() height: number | string = 400;
  @Input() apiData: any = [];
  @Input() ChartData: ChartDataSets[] = [];
  @Input() ChartLabels: Label[] = [];
  @Input() LegendPosition: Chart.PositionType = 'top';
  @Input() ChartColors: Colors[] = [];
  @Input() ChartLegend = false;
  @Input() ChartType = 'line';
  @Input() ChartPlugins = [];
  @Input() ChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      position: this.LegendPosition ? this.LegendPosition : 'top',
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            display: !this.noXLabels,
          },
        },
      ],
    },
  };

  private _selectedTheme: Theme = 'light-theme';
  public get selectedTheme() {
    return this._selectedTheme;
  }
  public set selectedTheme(value) {
    this._selectedTheme = value;
    let overrides: ChartOptions;
    if (this.selectedTheme === 'dark-theme') {
      overrides = {
        legend: {
          labels: { fontColor: '#acbac3' },
        },
        scales: {
          xAxes: [
            {
              ticks: { fontColor: '#acbac3' },
              gridLines: { color: 'rgba(255,255,255,0.1)' },
            },
          ],
          yAxes: [
            {
              ticks: { fontColor: '#acbac3' },
              gridLines: { color: 'rgba(255,255,255,0.1)' },
            },
          ],
        },
      };
    } else {
      overrides = {};
    }
    this.themeService.setColorschemesOptions(overrides);
  }

  public toggleLegend(e) {
    this.ChartLegend = !this.ChartLegend;
  }

  public toggleXLabels(e) {
    this.noXLabels = e.target.checked;
    this.ChartOptions = {
      ...this.ChartOptions,
      scales: {
        ...this.ChartOptions.scales,
        xAxes: [
          {
            ...this.ChartOptions.scales.xAxes[0],
            ticks: {
              ...this.ChartOptions.scales.xAxes[0].ticks,
              display: e.target.checked,
            },
          },
        ],
      },
    };
  }

  constructor(
    private themeService: ThemeService,
    private appTheme: AppThemeService
  ) {
    this.appTheme.darkTheme.subscribe((e) =>
      this.setCurrentTheme(e ? 'dark-theme' : 'light-theme')
    );
  }

  setCurrentTheme(theme: Theme) {
    this.selectedTheme = theme;
  }

  ngOnInit(): void {
    if (this.noLegend) this.ChartLegend = false;
    this.ChartOptions.legend.position = this.LegendPosition;
    this.ChartOptions.scales.xAxes = [
      {
        ticks: {
          display: !this.noXLabels,
        },
      },
    ];
    if (this.ChartType === 'pie' || this.ChartType === 'doughnut') {
      this.ChartOptions.scales.display = false;
      this.ChartOptions.scales.xAxes[0].display = false;
      this.ChartOptions.scales.yAxes[0].display = false;
    }
    if (this.stacked) {
      this.ChartOptions.scales.xAxes[0] = {
        ...this.ChartOptions.scales.xAxes[0],
        stacked: true,
      };
      this.ChartOptions.scales.yAxes[0] = {
        ...this.ChartOptions.scales.yAxes[0],
        stacked: true,
      };
    }
  }
  ngAfterViewInit() {
    if (this.gradient) {
      const gradient = this.canvasEl.nativeElement
        .getContext('2d')
        .createLinearGradient(0, 0, 0, 450);
      gradient.addColorStop(
        0,
        `rgba(${this.gradient.r}, ${this.gradient.g}, ${this.gradient.b}, 1.0)`
      );
      gradient.addColorStop(
        0.1,
        `rgba(${this.gradient.r}, ${this.gradient.g}, ${this.gradient.b}, 0.75)`
      );
      gradient.addColorStop(
        0.5,
        `rgba(${this.gradient.r}, ${this.gradient.g}, ${this.gradient.b}, 0.25)`
      );
      gradient.addColorStop(
        1,
        `rgba(${this.gradient.r}, ${this.gradient.g}, ${this.gradient.b}, 0)`
      );

      this.ChartColors = [
        {
          borderColor: `rgb(${this.gradient.r}, ${this.gradient.g}, ${this.gradient.b})`,
          backgroundColor: gradient,
          pointBackgroundColor: 'white',
          pointBorderColor: 'black',
        },
      ];
    }
  }
}
